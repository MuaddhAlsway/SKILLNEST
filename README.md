<div align="center">

<img src="https://img.shields.io/badge/SkillNest-Learning%20Platform-6C63FF?style=for-the-badge&logo=react&logoColor=white" alt="SkillNest" />

# 🎓 SkillNest

### *Where Talent Meets Opportunity*

A modern, full-featured online learning platform built with React 19 and Vite. SkillNest connects students with high-quality courses across multiple disciplines — from Programming to AI, Design to Marketing.

<br/>

[![React](https://i=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React_Router-7.12.0-CA4245?style=flat-square&logo=react-router&logoColor=white)](https://reactrouter.com)
[![React Icons](https://img.shields.io/badge/React_Icons-5.5.0-E91E63?style=flat-square&logo=react&logoColor=white)](https://react-icons.github.io)
[![ESLint](https://i9.39.1-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Pages & Routes](#-pages--routes)
- [Course Categories](#-course-categories)
- [Components](#-components)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)

---

## 🌟 Overview

SkillNest is an intermediate-level full-stack LMS (Learning Management System) platform designed to deliver a seamless learning experience. The platform features a rich course catalog, category-based filtering, detailed course pages with full curriculum, and a responsive UI that works across all devices.

> **Current Status:** Frontend complete — Backend integration in progress.

---

## ✨ Features

### 🎯 Core Features
- **Course Catal100+ courses across 7 professional categories
- **Smart Filtering** — Filter courses by category with instant results
- **Course Details** — Full curriculum with lessons, durations, and video links
- **Course Cards** — Instructor info, duration, lecture count, price, and star rating
- **Search** — Course search functionality in the hero header

### 🎨 UI/UX
- **Responsive Design** — Mobile-first layout with hamburger menu
- **Smooth Navigation** — Auto scroll-to-top on every route change
- **Sliding Carousel** — Animated course showcase section
- **Testimonials** — Student reviews and success stories
- **Banner CTA** — Call-to-action sections for engagement

### 📄 Pages
- **Home** — Full landing page with hero, categories, jobs, testimonials
- **Categories** — Browse and filter all available courses
- **Course Category** — Courses grouped by specific category
- **Course Details** — Individual course page with full curriculum
- **About** — Platform story and mission


---

## 🛠 Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| UI Framework | React | 19.2.0 |
| Build Tool | Vite | 7.2.4 |
| Routing | React Router DOM | 7.12.0 |
| Icons | React Icons | 5.5.0 |
| Database Client | LibSQL Client | 0.17.0 |
| Environment | Dotenv | 17.3.1 |
| Linting | ESLint | 9.39.1 |

---

## 📁 Project Structure

```
skillnest/
│
├── 📂 public/
│   └── vite.svg
│
├── 📂 src/
│   │
│   ├── 📂 pages/
│   │   ├── Home.jsx              # Landing page
│   │   ├── Categories.jsx        # Course catalog with filter
│   │   ├── About.jsx             # About page
│   │   └── Contactus.jsx         # Contact page
│   │
│   ├── 📂 components/
│   │   ├── Navbar.jsx            # Navigation bar
│   │   ├── Header.jsx            # Hero section with search
│   │   ├── CardCourse.jsx        # Course card component
│   │   ├── Filter.jsx            # Category filter
│   │   ├── CourseCategoryDetails.jsx  # Category detail view
│   │   ├── CoursePageDetails.jsx      # Single course vw
│   │   ├── SectionCategories.jsx      # Category showcase
│   │   ├── CategoriesPlus.jsx         # Extended categories
│   │   ├── Sliding.jsx           # Sliding carousel
│   │   ├── Banner.jsx            # CTA banner
│   │   ├── LatesJobs.jsx         # Latest job listings
│   │   ├── Testiominal.jsx       # Testimonials section
│   │   ├── Footer.jsx            # Site footer
│   │   ├── Contact.jsx           # Contact form
│   │   ├── AboutHeader.jsx       # About page header
│        # Email subscription
│   │   ├── Effer.jsx             # Effects section
│   │   ├── CardStudent.jsx       # Student card
│   │   ├── ScrollToTop.jsx       # Auto scroll utility
│   │   └── coursesData.js        # Course data source
│   │
│   ├── 📂 assets/
│   │   ├── 80+ images (.jpg, .webp, .png)
│   │   ├── demo.mp4
│   │   └── website TRQ.pdf
│   │
│   ├── App.jsx                   # Root component & routes
│   ├── main.jsx                  # Entry point
│   ├── App.css
│   └── index.css
│
x.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 🗺 Pages & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home` | Landing page — hero, categories, jobs, testimonials, footer |
| `/categories` | `Categories` | Full course catalog with category filter |
| `/category/:categoryName` | `CourseCategoryDetails` | Courses filtered by category name |
eature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

Made with ❤️ by the SkillNest Team

*"Got Talent? Meet Opportunity."*

</div>
ates

### Phase 4 — Admin & HR 📋
- [ ] Admin panel (manage students & courses)
- [ ] HR panel (track student performance)
- [ ] Role-based access control (RBAC)

### Phase 5 — Backend & Database 📋
- [ ] Express.js REST API
- [ ] Turso (LibSQL) database
- [ ] Full CRUD operations
- [ ] API documentation

### Phase 6 — Deployment 📋
- [ ] Environment configuration
- [ ] CI/CD pipeline
- [ ] Production deployment

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b fduction build locally
npm run lint      # Run ESLint checks
```

---

## 🗺 Roadmap

### Phase 1 — Frontend ✅
- [x] Home page
- [x] Course catalog with filtering
- [x] Course detail pages
- [x] About page
- [x] Contact page
- [x] Responsive design

### Phase 2 — Authentication 🔄
- [ ] Student login / register
- [ ] JWT token management
- [ ] Protected routes
- [ ] Auth context

### Phase 3 — Student Features 📋
- [ ] Student profile & dashboard
- [ ] Course enrollment
- [ ] Progress tracking
- [ ] Certific# Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/skillnest.git

# 2. Navigate into the project
cd skillnest

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

App will be running at **http://localhost:5173**

---

## 📜 Scripts

```bash
npm run dev       # Start development server (Vite HMR)
npm run build     # Build for production
npm run preview   # Preview pro| Full course page with curriculum sections |
| `coursesData.js` | Central data source for all courses |

### Home Section Components
| Component | Description |
|-----------|-------------|
| `SectionCategories` | Visual category showcase |
| `CategoriesPlus` | Extended category grid |
| `Sliding` | Animated course carousel |
| `Banner` | Call-to-action banner |
| `LatesJobs` | Latest job opportunities |
| `Testiominal` | Student testimonials |
| `Email` | Email subscription form |

---

## 🚀 Getting Started

##onsive nav with mobile menu, login/signup buttons |
| `Header` | Hero section with search bar and trust badges |
| `Footer` | Links, contact info, social media icons |
| `ScrollToTop` | Scrolls to top on every route change |

### Course Components
| Component | Description |
|-----------|-------------|
| `CardCourse` | Displays course with image, instructor, price, rating |
| `Filter` | Category filter buttons with active state |
| `CourseCategoryDetails` | Lists courses by selected category |
| `CoursePageDetails` ning     │
│  📊 Business Analysis│  Project Mgmt, Data-Driven Decisions │
│  📈 Data Analysis    │  Data Science, Analytics, Viz        │
│  📣 Marketing & Sales│  Digital Marketing, Social Media     │
│  🎨 Design & Creative│  UI/UX Design, Web Design            │
│  🔐 Cyber Security   │  Security Fundamentals               │
└──────────────────────┴──────────────────────────────────────┘
```

---

## 🧩 Components

### Layout Components
| Component | Description |
|-----------|-------------|
| `Navbar` | RespillNest page |
| `/contact` | `Contactus` | Contact form and info |
| `/login` | *(coming soon)* | Student login |
| `/signup` | *(coming soon)* | Student registration |

---

## 📚 Course Categories

```
┌─────────────────────────────────────────────────────────────┐
│                    7 CATEGORIES                             │
├──────────────────────┬──────────────────────────────────────┤
│  💻 Programming      │  React, JS, Node.js, Full Stack      │
│  🤖 AI               │  Machine Learning, Deep Lear| `/course/:id` | `CoursePageDetails` | Full course page with curriculum |
| `/about` | `About` | About Sk