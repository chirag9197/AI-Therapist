"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createClient } from '@supabase/supabase-js';
import { currentUser } from '@clerk/nextjs/server'
import { onboardingFormSchema } from '@/app/lib/schemas';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function onboardingFormSubmit(
  values: z.infer<typeof onboardingFormSchema>
) {
  try {
    // Validate the input data
    const validationResult = onboardingFormSchema.safeParse(values);
    if (!validationResult.success) {
      console.error('Validation error:', validationResult.error);
      return { 
        success: false, 
        message: "Invalid form data",
        error: validationResult.error 
      };
    }

    // Try to get current user, but make it optional
    const user = await currentUser().catch((error) => {
      console.error('Error getting current user:', error);
      return null;
    });
    
    if (user) {
      console.log("User ID:", user.id);
      values.userId = user.id;
    } else {
      // Use a default ID if no user is available
      values.userId = 'anonymous-' + Date.now().toString();
      console.log("Using anonymous ID:", values.userId);
    }

    // Ensure all required fields are present
    const formData = {
      onboardingResponse: {
        ...values,
        userId: values.userId || 'anonymous-' + Date.now().toString(),
        createdAt: new Date().toISOString()
      }
    };

    console.log('Attempting to insert data:', JSON.stringify(formData, null, 2));

    const { data, error } = await supabase
      .from('OnboardingFormResponses')
      .insert(formData)
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return { 
        success: false, 
        message: "Failed to save data",
        error: error.message 
      };
    }

    if (!data) {
      console.error('No data returned from Supabase');
      return { 
        success: false, 
        message: "No data returned from database" 
      };
    }

    console.log('Successfully inserted data:', JSON.stringify(data, null, 2));
    return { 
      success: true, 
      message: "Data saved successfully",
      data 
    };

  } catch (e) {
    console.error('Unexpected error in onboardingFormSubmit:', e);
    return { 
      success: false, 
      message: "An unexpected error occurred",
      error: e instanceof Error ? e.message : 'Unknown error'
    };
  }
}

// export async function deleteTodo(
//   prevState: {
//     message: string;
//   },
//   formData: FormData,
// ) {
//   const schema = z.object({
//     id: z.string().min(1),
//     todo: z.string().min(1),
//   });
//   const data = schema.parse({
//     id: formData.get("id"),
//     todo: formData.get("todo"),
//   });

//   try {
//     await sql`
//       DELETE FROM todos
//       WHERE id = ${data.id};
//     `;

//     revalidatePath("/");
//     return { message: `Deleted todo ${data.todo}` };
//   } catch (e) {
//     return { message: "Failed to delete todo" };
//   }
// }