# Ready2Go Overseas Consultancy ✈️🌍

Ready2Go Overseas Consultancy is a comprehensive web platform for study abroad aspirants, offering university exploration, country guides, application tracking, visa guidance, and AI-assisted counseling.

## 📁 Repository Structure

This repository is structured as a full-stack project with decoupled frontend and backend applications:

```
ready2go/
├── frontend/             # React + Vite + TypeScript web application
│   ├── src/              # Components, pages, utilities, and assets
│   ├── public/           # Static public assets
│   ├── .env.example      # Frontend environment variable template
│   ├── package.json      # Frontend dependencies & scripts
│   └── vite.config.ts    # Vite configuration
├── backend/              # Node.js + Express + TypeScript API server
│   ├── src/              # Routes, controllers, services, and middleware
│   ├── .env.example      # Backend environment variable template
│   ├── package.json      # Backend dependencies & scripts
│   └── tsconfig.json     # TypeScript configuration
├── vercel.json           # Vercel deployment configuration
└── README.md             # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** / **pnpm**

---

### 🎨 Running Frontend

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy environment variables and set your keys:
   ```bash
   cp .env.example .env
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`.

5. Build for production:
   ```bash
   npm run build
   ```

---

### ⚙️ Running Backend

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```
   The backend API will run on `http://localhost:4000`.

5. Build for production:
   ```bash
   npm run build
   ```

---

## 🛡️ License & Copyright

© Ready2Go Overseas Consultancy. All rights reserved.
