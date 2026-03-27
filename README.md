# SkillNest - Online Learning Platform

A modern online education platform built with React and Vite. SkillNest connects students with high-quality courses across multiple disciplines.

---

## Tech Stack

- **React** 19.2.0
- **Vite** 7.2.4
- **React Router DOM** 7.12.0
- **React Icons** 5.5.0
- **ESLint** 9.39.1

---

## Project Structure

```
SkillNest/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Categories.jsx
│   │   ├── About.jsx
│   │   └── Contactus.jsx
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Header.jsx / Header.css
│   │   ├── CardCourse.jsx / CardCourse.css
│   │   ├── Filter.jsx / Filter.css
│   │   ├── CourseCategoryDetails.jsx
│   │   ├── CoursePageDetails.jsx
│   │   ├── SectionCategories.jsx
│   │   ├── Sliding.jsx
│   │   ├── Banner.jsx
│   │   ├── LatesJobs.jsx
│   │   ├── Testiominal.jsx
│   │   ├── Footer.jsx
│   │   ├── Contact.jsx
│   │   ├── Email.jsx
│   │   ├── Effer.jsx
│   │   ├── CategoriesPlus.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── coursesData.js
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, categories, testimonials |
| `/categories` | Categories | Browse and filter all courses |
| `/category/:categoryName` | CourseCategoryDetails | Courses by category |
| `/course/:id` | CoursePageDetails | Individual course details |
| `/about` | About | About SkillNest |
| `/contact` | Contact | Contact form and info |

---

## Features

- Course catalog with 100+ courses across 7 categories
- Category filtering (All, Programming, AI, Business Analysis, Design & Creative, Data Analysis, Marketing & Sales)
- Course details with full curriculum, lessons, and video links
- Course cards showing instructor, duration, lectures, price, and rating
- Responsive design with mobile hamburger menu
- Course search in header
- Student testimonials section
- Contact form
- Auto scroll to top on route change
- Social media links in footer

---

## Course Categories

| Category | Courses |
|----------|---------|
| Programming | React, JavaScript, Node.js, Full Stack, HTML/CSS, TypeScript |
| AI | Machine Learning, Deep Learning, NLP, Reinforcement Learning |
| Business Analysis | Project Management, Data-Driven Decisions, Stakeholder Management |
| Data Analysis | Data Science, Analytics, Visualization |
| Marketing & Sales | Digital Marketing, Social Media, Sales Strategy |
| Design & Creative | UI/UX Design, Web Design |
| Cyber Security | Security fundamentals and practices |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/skillnest.git

# Navigate to project
cd skillnest

# Install dependencies
npm install

# Start development server
npm run dev
```

App runs at `http://localhost:5173`

### Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## Roadmap

- [ ] Student authentication (Login / Register)
- [ ] Student profile & dashboard
- [ ] Admin panel
- [ ] HR panel
- [ ] Course enrollment
- [ ] Progress tracking
- [ ] Backend API integration
- [ ] Database persistence

---

## License

MIT
