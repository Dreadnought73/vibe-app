# Vibe

A full-stack web application that tries to replicate the core functionality of Lovable platform for AI-powered web development. Built with Next.js, this project demonstrates modern full-stack architecture with user authentication, project management, AI-powered code generation, and integrated billing.

**Purpose**: Learning of a full-stack AI application development.

---

## ✨ Features

- **User Authentication**: Secure sign-up and sign-in powered by Clerk
- **Project & Workspace Management**: Create, organize, and manage multiple projects
- **AI-Powered Code Generation**: Generate production-ready code using OpenAI's LLMs with intelligent model routing
- **Containerized Execution**: Execute generated code safely in isolated Docker containers via E2B
- **Background Jobs**: Asynchronous processing with Inngest for long-running tasks
- **Billing Integration**: Built-in usage tracking and payment processing with Clerk
- **Type-Safe API**: End-to-end type safety with tRPC
- **Modern UI/UX**: Responsive design with Tailwind CSS and ShadcnUI components

### 🚀 Planned Enhancements

- **Live Generation**: Real-time code generation with streaming responses
- **Intelligent Model Routing**: Automatic selection of optimal LLM models based on task complexity
- **Self-Refinement**: Iterative AI improvements and error correction
- **Enhanced Analytics**: Detailed usage tracking and performance metrics

---

## 🛠 Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React, Next.js (App Router), TypeScript, Tailwind CSS, ShadcnUI |
| **Backend** | Next.js API Routes, tRPC, Node.js |
| **Database** | Prisma ORM, PostgreSQL (Neon) |
| **Authentication** | Clerk |
| **AI/LLM** | OpenAI API |
| **Code Execution** | Docker, E2B (sandboxed execution) |
| **Background Jobs** | Inngest |
| **Styling** | Tailwind CSS, ShadcnUI |
| **Type Safety** | TypeScript, tRPC |

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18+)
- **npm** or **yarn** or **pnpm**
- **Docker** (for code execution sandbox)
- **PostgreSQL** (or use Neon for a managed cloud database)

You'll also need accounts and API keys for:

- Clerk (authentication)
- OpenAI (LLM API)
- E2B (code execution)
- Inngest (background jobs)
- Neon (PostgreSQL hosting, optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dreadnought73/vibe-app.git
   cd vibe
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add the required variables (see [Environment Variables](#-environment-variables) section below).

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   ```

   This will create the database schema and generate Prisma client.

5. **Seed the database (optional)**
   ```bash
   npx prisma db seed
   ```

### Running the Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The application will:
- Reload automatically as you make changes
- Show lint errors in the console
- Connect to your local Clerk development instance

### Build Instructions

```bash
# Build for production
npm run build

# Start production server
npm run start
```

For deployment, follow Next.js hosting guides for Vercel (recommended) or other platforms.

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Database (Neon PostgreSQL)
DATABASE_URL=postgresql://user:password@host/dbname

# OpenAI API
OPENAI_API_KEY=your_openai_api_key

# E2B Code Execution
E2B_API_KEY=your_e2b_api_key

# Inngest Background Jobs
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Note**: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser; never expose sensitive keys with this prefix.

---

## 🗺 Roadmap

- [x] User authentication with Clerk
- [x] Project & workspace management
- [x] AI-powered code generation with OpenAI
- [x] Containerized code execution (E2B + Docker)
- [x] Background job processing (Inngest)
- [x] Billing integration
- [ ] Live code generation with streaming
- [ ] Intelligent model routing based on task complexity
- [ ] Self-refinement and error correction
- [ ] Enhanced performance analytics
- [ ] Collaborative editing (real-time sync)
- [ ] Custom code templates library
- [ ] Export & deployment options

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please ensure:
- Code follows the existing style
- TypeScript types are properly defined
- Tests pass (if applicable)
- Environment variables are documented

---

## 📧 Questions?

Feel free to open an issue or reach out! Happy coding. 🚀
