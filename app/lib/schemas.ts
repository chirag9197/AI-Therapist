import { z } from "zod"

export const onboardingFormSchema = z.object({
  // Demographics
  age: z.number().min(10).max(120),
  gender: z.string().optional(),
  occupation: z.string().optional(),
  relationshipStatus: z.string().optional(),

  // Presenting Concerns
  emotionalState: z.number().min(1).max(10),
  stressFrequency: z.enum(["Never", "Rarely", "Sometimes", "Often", "Always"]),

  // Mental Health History
  priorTherapy: z.enum(["Yes", "No", "Prefer not to say"]),
  medication: z.enum(["Yes", "No", "Prefer not to say"]),
  pastDiagnosis: z.string().optional(),

  // Wellbeing & Lifestyle
  sleepQuality: z.enum(["Poor", "Fair", "Good", "Excellent"]),
  appetite: z.enum(["Decreased", "Normal", "Increased"]),
  support: z.enum(["Yes", "No", "Somewhat"]),
  exerciseFrequency: z.enum(["Never", "Occasionally", "Regularly"]),

  // Goals & Preferences
  goals: z.array(z.string()).min(1, { message: "Please select at least one goal" }),
  preferredSupport: z.enum(["Chat", "Self-help resources", "Both"]),

  // Safety Screening
  selfHarm: z.enum(["Yes", "No", "Prefer not to say"]),
  crisisHelp: z.enum(["Yes", "No"]).optional(),

  // Existing fields
  productivity_impact: z.number().min(0).max(7),
  work_missed: z.number().min(0).max(7),
  relationship_issues: z.number().min(0).max(7),
  feeling_down: z.string().min(1, { message: "Please select an option" }),
  userId: z.string(),
}) 