# AI Career Coach - SensAi

[](https://opensource.org/licenses/MIT)

This project is a full-stack AI career coach application, "SensAi," built using Next.js, Shadcn UI, and various other modern technologies. It provides users with AI-powered career guidance and support.

### 📌 Live Demo

[🚀 Click here to view the deployed project](https://sensai-brown.vercel.app/)

## ✨ Features

SensAi offers a comprehensive suite of tools to help you advance in your career:

  * **🤖 AI-Powered Career Guidance**: Get personalized career recommendations and insights powered by Google's Gemini AI.
  * **📄 Intelligent Resume Builder**:
      * Create and manage your resume using a user-friendly form-based editor or a markdown editor.
      * Get AI-powered suggestions to improve your resume's content.
      * Download your resume as a PDF.
  * **✍️ AI Cover Letter Generator**:
      * Generate tailored cover letters for your job applications by providing the job description.
      * View and manage all your generated cover letters.
  * **👨‍💻 Adaptive Interview Preparation**:
      * Practice with AI-generated mock interviews with questions tailored to your industry and skills.
      * Get detailed feedback and track your performance over time with analytics.
  * **📈 Industry-Specific Insights**:
      * Get up-to-date information on salary ranges, demand levels, and key trends in your industry.
      * Discover the top skills required for your industry and get recommendations on what to learn next.
  * **👋 Personalized Onboarding**:
      * Share your industry, experience, and skills to get personalized guidance.
  * **Modern and Responsive UI**:
      * A sleek and user-friendly interface built with **Shadcn UI** and **Tailwind CSS**.

## 🚀 How It Works

1.  **Professional Onboarding**: Share your industry and expertise for personalized guidance.
2.  **Craft Your Documents**: Create ATS-optimized resumes and compelling cover letters.
3.  **Prepare for Interviews**: Practice with AI-powered mock interviews tailored to your role.
4.  **Track Your Progress**: Monitor improvements with detailed performance analytics.

## 🛠️ Technologies Used

This project is built with a modern, full-stack tech stack:

  * **Framework**: [Next.js](https://nextjs.org/)
  * **Styling**: [Tailwind CSS](https://tailwindcss.com/)
  * **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
  * **Authentication**: [Clerk](https://clerk.com/)
  * **Database**: [Neon DB](https://neon.tech/) (Serverless Postgres)
  * **ORM**: [Prisma](https://www.prisma.io/)
  * **AI**: [Google Gemini](https://www.google.com/search?q=https://ai.google/discover/gemini/)
  * **Background Jobs**: [Inngest](https://www.inngest.com/)
  * **Form Management**: [React Hook Form](https://react-hook-form.com/)
  * **Schema Validation**: [Zod](https://zod.dev/)
  * **Notifications**: [Sonner](https://www.google.com/search?q=https://sonner.emilkowal.ski/)
  * **Deployment**: [Vercel](https://vercel.com/)

## ⚡️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

  * Node.js (v18.18.0 or later)
  * npm

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/AkshayTiwari27/SensAi.git
    cd SensAi
    ```

2.  Install NPM packages:

    ```bash
    npm install
    ```

3.  Set up your environment variables. Create a `.env` file in the root of your project and add the following:

    ```env
    # Database
    DATABASE_URL="your_neon_db_url"

    # Clerk Authentication
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_public_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

    # Google Gemini API
    GEMINI_API_KEY=your_gemini_api_key
    ```

4.  Run database migrations:

    ```bash
    npx prisma migrate dev
    ```

5.  Start the development server:

    ```bash
    npm run dev
    ```

6.  Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
.
├── actions/            # Server-side actions
├── app/                # Next.js App Router
│   ├── (auth)/         # Authentication pages
│   ├── (main)/         # Main application pages
│   ├── api/            # API routes
│   └── layout.js
├── components/         # UI components
│   └── ui/             # Shadcn UI components
├── data/               # Static data (FAQs, testimonials, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Helper functions and clients
├── prisma/             # Prisma schema and migrations
└── public/             # Static assets
```

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

## 🙏 Acknowledgements

  * Thanks to the creators of Next.js, Shadcn UI, Tailwind CSS, Prisma, Neon DB, and Inngest.
  * Icons by [Lucide](https://lucide.dev/).
