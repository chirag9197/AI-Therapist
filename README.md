# AI-Therapist 🧠

AI-Therapist is an AI-powered platform designed to provide accessible mental health support and guidance. This web-based application utilizes the power of artificial intelligence to facilitate supportive conversations and offer mental health resources to users. It presents a safe and confidential space for users to express their thoughts and feelings while receiving empathetic responses and practical guidance.

## 🎯 Project Purpose and Background

The goal of this project is to make mental health support more accessible and available to everyone. It aims to bridge the gap between individuals seeking help and affordable, readily-available mental health services. The primary users of this application are individuals seeking mental health support or guidance, mental health professionals, and AI enthusiasts.

## 🌟 Features and Functionality

- AI-Powered Conversations 🤖: Leveraging artificial intelligence to simulate human-like conversations and provide empathetic responses.
- Confidential Interactions 🔒: Ensuring user privacy and confidentiality throughout the interaction.
- Responsive Design 📱: Adaptable to various devices, providing optimal viewing and interaction experience for the user.
- Therapeutic Approaches 💡: Incorporating evidence-based therapeutic approaches into the AI algorithms.
- Progress Tracking 📈: Enabling users to monitor their progress and mood over time.

## 🛠️ Technology Stack

- Languages: TypeScript (5.2.2), JavaScript, HTML, CSS, PLpgSQL
- Frameworks: React (rc), Next.js (15.1.4)
- AI Integration: Deepseek
- Authentication: Clerk
- Styling: Tailwind CSS (3.3.3)
- Testing: Jest

## 🔧 Installation and Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Steps

1. Clone the repository:
```bash
git clone https://github.com/chirag9197/AI-Therapist.git
cd AI-Therapist
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add necessary configuration:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
GROQ_API_KEY=
```

- You can get the first 2 keys from a Supabase dashboard. Make sure to create a table called OnboardingFormResponses
- You only need Clerk key if you want to manage the login yourself 
- You can get a GROQ key from the Groq console. This gives you access to LLMs like Deepseek for free. 

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🚀 Usage Examples

1. Create an account or log in
2. Start a new therapy session
3. Engage in conversation with the AI therapist
4. Access resources and track your progress

## 📁 Project Structure

- Configuration files: .eslintrc.json, .gitignore, components.json, next.config.js, package.json, postcss.config.js, tsconfig.json, webpack.config.js
- Source code files: groq-test.js, middleware.ts, next-env.d.ts, tailwind.config.ts

## 🤝 Contributing Guidelines

We encourage you to contribute to this project! Please follow the standard GitHub pull request process and ensure your code adheres to the existing style.

## 📜 License Information

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💌 Contact

Chirag - chirag9197@gmail.com

Project Link: [https://github.com/chirag9197/AI-Therapist](https://github.com/chirag9197/AI-Therapist)

## 🙏 Acknowledgments

- Groq and Deepseek for providing the AI capabilities
- The mental health professional community for guidance