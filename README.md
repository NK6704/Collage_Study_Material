<div align="center">
  <h1>📚 EduVault</h1>
  <p><strong>A Modern, Role-Based Academic Material Management Platform</strong></p>
</div>

## 📖 Overview

EduVault is a highly secure, full-stack Academic Material Management Platform engineered specifically for modern colleges and universities. It deprecates flat-file chaotic sharing (e.g., scattered WhatsApp links and random Google Drives) and enforces a strict, automated **Department → Semester → Subject → Material Type** matrix.

Built with an enterprise-ready architecture, EduVault guarantees isolated role-based access control (RBAC) across **Students**, **Moderators**, and **Administrators**, ensuring complete academic integrity, rich analytics tracking, and streamlined syllabus distribution.

---

## ✨ Core Features

- 🔐 **Strict Role-Based Access Control (RBAC)**
  - **Students:** Secure consumer-only access logically locked to their authentic Department and Admission Year constraints.
  - **Moderators:** Delegated authorities assigned strictly to maintain and approve content within their specific respective Departments.
  - **Administrators:** Top-level "God-mode" capabilities featuring live visual analytics matrices, automated user overrides, and Department Hierarchy initialization.
- 📂 **Autonomous Hierarchical Routing Engine**
  - Say goodbye to "orphaned files". The Node.js backend dynamically intercepts uploads and strictly generates and routes them into physical `[Department] > [Semester] > [Subject]` folders dynamically.
- ☁️ **Cloud Native Storage Integration**
  - Fully integrated with **Cloudflare R2** via AWS S3 APIs for blistering fast, global, zero-egress data persistence mapping.
- 🎨 **Premium UI/UX Design**
  - Custom UI engineered with React, Vite, Framer Motion, and Tailwind CSS wrapped around a stunning dark-mode glassmorphism aesthetic. Features robust loading skeletons, realtime inline validations, password-strength heuristics, and fully responsive dashboards.
- 🛡️ **Enterprise Registration Constraints**
  - Exact Roll-Number math verification via Regex patterns, dynamic password checklists, and strict relational dependencies directly injected into the database on user creation.

---

## 🛠️ Technology Stack

| Architecture | Technologies Used |
|--------------|-------------------|
| **Frontend** | React (Vite), TypeScript, Tailwind CSS, Framer Motion, Zustand (State Management) |
| **Backend** | Node.js, Express, TypeScript, Zod (Schema Validation) |
| **Database** | PostgreSQL (Supabase) |
| **Auth** | Supabase Auth (Google OAuth + Email/Password Providers) |
| **Storage** | Cloudflare R2 (S3 API compatibility configuration) |

---

## 🚀 Local Development Setup

To run EduVault locally, you will need **Node.js** and an active **Supabase** database backend configured with your local keys.

### 1. Clone the Repository
```bash
git clone https://github.com/Nikhil-Yadav6704/Collage_Study_Material.git
cd Collage_Study_Material
```

### 2. Frontend Configuration
Initiate the React/Vite instance.
```bash
npm install

# Create a .env file and define the environment:
# VITE_API_URL=http://localhost:3001
# VITE_SUPABASE_URL=your_project_url
# VITE_SUPABASE_ANON_KEY=your_anon_key

npm run dev
```

### 3. Backend Configuration
Initiate the Node.js/Express API layer.
```bash
cd backend
npm install

# Create a backend/.env file and grant it service-role authority:
# PORT=3001
# FRONTEND_URL=http://localhost:8080
# SUPABASE_URL=your_project_url
# SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

npm run dev
```

---

## 🏗️ Architecture & Database Flow

EduVault relies heavily on relational mappings inside PostgreSQL. A complex `supabase_schema_v10.sql` manages deep Triggers, RLS Policies, and Auth Hooks:
1. **Profiles Engine**: Extending raw Supabase Auth sequences to map custom user metadata (Roll Numbers, Constraints, Department Binding) accurately inside the system.
2. **Folder Mapping Matrix**: A strict hierarchical mechanism guaranteeing files can never float randomly; everything is structurally injected into its assigned academic syllabus node.
3. **Approval Buffers**: A robust buffering table that caches raw Student uploads, intentionally pausing production-rendering until a verified Moderator audits and approves the physical file content.

---

## 🤝 Contribution & Usage

This project acts as the primary production-repository for the EduVault application. Standard best-practices apply for community contributions:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Deploying some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request for administrative audit!
