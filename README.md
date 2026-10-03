# AI Skill Proof

**AI Skill Proof** is an evidence-based practical skill verification platform designed for Artificial Intelligence and Machine Learning (AIML) students.

Instead of relying only on theoretical multiple-choice quizzes or self-reported resumes, AI Skill Proof verifies students' practical coding abilities through real hands-on challenges, automated test execution, and AI-assisted qualitative feedback.

---

## What Does the Platform Do?

1. **User Authentication**: Students create an account and log in securely.
2. **Skill Selection**: Students pick a technical skill to verify (starting with **Python** in Version 1).
3. **Hands-on Challenges**: Students solve practical coding tasks.
4. **Automated Objective Testing**: Code submissions run against predefined unit tests to ensure functional correctness.
5. **AI Qualitative Feedback**: An AI evaluator provides constructive hints, code quality reviews, and optimization tips.
6. **Skill Score & Evidence**: Scores are computed from actual code test passes, code cleanliness, and problem-solving history.
7. **Skill Passport**: A personal, verifiable digital profile showcasing verified skills, scores, test evidence, and personalized areas for improvement.

---

## Tech Stack

- **Frontend**: React (powered by Vite), JavaScript, and CSS.
- **Backend**: Python with FastAPI (fast, modern REST API framework).
- **Database**: SQLite with SQLAlchemy ORM (lightweight, zero-configuration database).
- **Authentication**: JWT (JSON Web Tokens) with secure password hashing (bcrypt).
- **AI Evaluation**: Connected via AI API (configured strictly through environment variables).

---

## Project Structure

```text
AI-SKILL-PROOF/
├── backend/       # Python & FastAPI backend service (APIs, routes, business logic)
├── frontend/      # React & Vite frontend web application (UI, components, pages)
├── ai/            # AI evaluation prompts, prompt templates, and AI client logic
├── database/      # Database models, schemas, and SQLite migration files
├── tests/         # Automated unit and integration tests
├── docs/          # Project documentation, guides, and architectural notes
├── .gitignore     # Files and folders to exclude from version control (e.g., secrets, node_modules)
└── README.md      # Project overview and instructions
```

---

## Development Roadmap

- [x] **Step 1: Project structure** (Current Step)
- [ ] **Step 2: Backend foundation** (FastAPI setup)
- [ ] **Step 3: Database** (SQLite & SQLAlchemy models)
- [ ] **Step 4: Frontend foundation** (Vite + React)
- [ ] **Step 5: Frontend-backend connection**
- [ ] **Step 6: Registration and login**
- [ ] **Step 7: Python skill module**
- [ ] **Step 8: Practical challenges**
- [ ] **Step 9: Submission system**
- [ ] **Step 10: Safe automated evaluation**
- [ ] **Step 11: AI-assisted evaluation**
- [ ] **Step 12: Skill scoring**
- [ ] **Step 13: Skill Passport**
- [ ] **Step 14: Skill-gap detection**
- [ ] **Step 15: Adaptive assessment**
- [ ] **Step 16: Verification / share feature**
- [ ] **Step 17: Testing and final UI polish**

---

## Security & Privacy Guidelines

- Never commit passwords, tokens, or API keys directly to the repository.
- Secrets must always be loaded via `.env` environment variables.
- Untrusted user-submitted code must always be executed in isolated and controlled evaluation environments.

