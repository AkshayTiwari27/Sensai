# SensAi: An AI-Powered Career Coaching Platform

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E44AD?style=for-the-badge&logo=google-gemini&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-000000?style=for-the-badge&logo=shadcn-ui&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Inngest](https://img.shields.io/badge/Inngest-FF6F00?style=for-the-badge&logo=inngest&logoColor=white)

## Executive Summary

SensAi is a comprehensive, full-stack career coaching platform designed to provide users with personalized, data-driven career guidance. The application leverages the Google Gemini API to offer a suite of intelligent tools, including a resume builder with AI-powered suggestions, a cover letter generator, and an adaptive interview preparation system. The platform is built with a modern tech stack, featuring Next.js for the front end, a serverless backend with a Neon DB PostgreSQL database, and Prisma ORM for efficient data management.

## 🧠 Project Evolution

### Key improvements

  * **AI-Powered Career Guidance**: Get personalized career recommendations and insights powered by Google's Gemini AI.
  * **Intelligent Resume Builder**: Create and manage your resume using a user-friendly form-based editor or a markdown editor. Get AI-powered suggestions to improve your resume's content and download your resume as a PDF.
  * **AI Cover Letter Generator**: Generate tailored cover letters for your job applications by providing the job description. View and manage all your generated cover letters.
  * **Adaptive Interview Preparation**: Practice with AI-generated mock interviews with questions tailored to your industry and skills. Get detailed feedback and track your performance over time with analytics.
  * **Industry-Specific Insights**: Get up-to-date information on salary ranges, demand levels, and key trends in your industry. Discover the top skills required for your industry and get recommendations on what to learn next.

## System Architecture: A Scalable Client-Server Model

### SensAi Client-Server Architecture

The SensAi platform is built on a modern, client-server architecture designed for scalability and performance. The front end is a Next.js application that communicates with a serverless backend, which in turn interacts with a PostgreSQL database and various third-party services.

### Architectural Breakdown

#### **Client (The Frontend)**

The client-side is a responsive and interactive user interface built with **React** and **Next.js**. It features a rich set of UI components from **Shadcn UI** and is styled with **Tailwind CSS**. The client is responsible for rendering the user interface and handling user interactions.

#### **Server (The Backend)**

The backend is built using **Next.js API Routes** and **Server Actions**, providing a robust and scalable serverless architecture. It handles business logic, data processing, and communication with the database and external services.

#### **Communication Protocol**

The client and server communicate via HTTP requests. The front end sends requests to the backend to fetch data, generate content, and perform other actions. The backend processes these requests, interacts with the database and external services, and returns the results to the client.

## Feature-Driven DSA Implementation: A Technical Analysis

The SensAi platform leverages a variety of data structures and algorithms to deliver its intelligent features:

  * **Resume Builder**: The resume builder uses a form-based editor and a Markdown editor to create and manage resumes. The data is stored in a structured format in the database and can be easily converted to a PDF for download.
  * **Cover Letter Generator**: The cover letter generator uses the Gemini API to generate tailored cover letters based on user-provided job descriptions. The generated letters are stored in the database and can be viewed and managed by the user.
  * **Interview Preparation**: The interview preparation system uses the Gemini API to generate mock interview questions tailored to the user's industry and skills. The user's performance is tracked over time with detailed analytics, which are displayed in interactive charts.

## How to Build and Run

### Prerequisites

  * Node.js (v18.18.0 or later)
  * npm

### Compilation (Makefile Recommended)

This project does not use a Makefile for compilation. Instead, you can use the following npm scripts to build and run the application:

  * `npm run dev`: Starts the development server.
  * `npm run build`: Builds the application for production.
  * `npm run start`: Starts the production server.
  * `npm run lint`: Lints the code.

### Execution

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

## Usage Demonstration

To use the SensAi platform, simply visit the live demo link and create an account. Once you're logged in, you can start using the various tools to help you advance in your career.

### 📌 Live Demo

[🚀 Click here to view the deployed project](https://sensai-brown.vercel.app/)

## Future Enhancements

The SensAi platform is constantly evolving, with new features and improvements being added all the time. Some potential future enhancements include:

  * **Job Application Tracker**: A tool to help users track their job applications and manage their job search process.
  * **Networking Hub**: A feature to help users connect with other professionals in their industry and build their professional network.
  * **Salary Negotiation Coach**: An AI-powered tool to help users prepare for salary negotiations and get the compensation they deserve.
