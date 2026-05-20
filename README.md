# 🚀 Applied.ai - AI-Powered Job Application Tracker

An intelligent, full-stack client-side dashboard designed to organize, analyze, and supercharge your job hunting workflow. Built with **React 19**, **Vite 6**, and **Supabase**, featuring an encrypted client-side PDF parser and local AI matching algorithms.

## ✨ Core Features

- **📊 Recruitment Conversion Analytics**: Real-time business intelligence metrics including pipeline conversion rates, interview status bar charts, average market compensation tracking, and total active pipeline contract valuation.
- **📑 Secure Client-Side Resume Indexing**: Integrates Mozilla `pdfjs-dist` to natively deconstruct binary PDF documents directly inside the sandbox worker, ensuring no token limits are reached and absolute privacy.
- **🧠 Local Matrix Analysis (AI Scan)**: Instantly calculates semantic overlap scores between your resume keywords and active Job Descriptions (JD).
- **🎯 Co-Pilot Match Optimization**: Automatically extracts matched tags, exposes severe gaps (missing framework implementations), and formulates strategic advice.
- **✉️ Automated Cold Email Engine**: Generates ready-to-copy, personalized self-nominations tailored specifically to the targeted company and title.
- **🗂️ Dual View Experience**: Seamless toggling between standard Data Grid and dynamic Kanban board pipelines with instant status persistence.

## 🛠️ Tech Stack

- **Frontend Core**: React 19 (Hooks, Context), TypeScript 5.7
- **Build Toolchain**: Vite 6, PostCSS, ESLint
- **Database / Backend**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS v4, Lucide React (Icons)
- **Core Engine Libraries**: Recharts (Analytics Data Vis), `pdfjs-dist` v4 (Binary Parser Engine)

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed.

### 2. Environment Configuration
Create a `.env` file in the root directory and securely map your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

(Note: .env is fully abstracted inside .gitignore and will never be pushed to version control.)

3. Installation
Clone the repository and install dependencies clean:

Bash
npm install
4. Local Development
Spin up the hot-reloading Vite server:

Bash
npm run dev
5. Production Compilation & Preview
Compile types and build optimized static assets:

Bash
# Build the production bundle
npm run build

# Preview the local production build
npm run preview
📂 Project Architecture Brief
Plaintext
src/
├── components/
│   └── Dashboard.tsx      # Main application engine (Analytics, AI Scanners, Grid/Kanban views)
├── lib/
│   └── supabase.ts       # Supabase initializing configuration client
├── App.tsx               # Main application entry layout routing wrapper
└── main.tsx              # React 19 concurrent DOM anchor initialization
🔒 Security & Privacy Notice
All resume parsing and token matching behaviors are carried out entirely client-side inside your local browser sandbox via compiled workers. No raw PDF content or personal information is shared or harvested.
