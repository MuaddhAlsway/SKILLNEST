// ================= Programming =================
import PR1 from "../assets/PR1.webp"; // Advanced React Full Course
import PR2 from "../assets/PR2.webp"; // JavaScript Mastery
import PR3 from "../assets/PR3.webp"; // NodeJS
import PR4 from "../assets/PR4.webp"; // NodeJS Backend
import PR5 from "../assets/PR5.webp"; // Full Stack
import PR6 from "../assets/PR6.webp"; // React Hook or HTML CSS
import FrontEnd from "../assets/FrontEnd.webp"; // Frontend Fundamentals
import PR7 from '../assets/PR7.jpg'

// ================= AI =================
import ML1 from "../assets/ML1.webp"; // Machine Learning
import ML2 from "../assets/ML2.webp"; // AI
import ML3 from "../assets/ML3.webp"; // Artificial Intelligence
import ML4 from "../assets/ML4.png"; // Deep Learning
import ML5 from "../assets/mL5.webp"; // Python AI
import ML6 from "../assets/ML6.webp"; // Natural Language Processing
import ML7 from "../assets/ML7.webp"; // AI Project Cycle
import ML8 from "../assets/ML8.webp"; // Reinforcement Learning
import ML9 from "../assets/ML9.webp"; // Advanced Machine Learning

// ================= Business Analysis =================
import BS1 from "../assets/BS1.webp"; // Business Analysis
import BS2 from "../assets/BS2.webp"; // Project Management
import BS3 from "../assets/BS3.webp"; // Data Driven Decision Making
import BS4 from "../assets/BS4.webp"; // Stakeholder
import BS6 from "../assets/BS6.webp"; // Requirement Gathering
import BS8 from "../assets/BS8.webp"; // Business Process Optimization

// ================= Data Analysis =================
import DS1 from "../assets/DS1.webp"; 
import DS2 from "../assets/DS2.webp"; 
import DS3 from "../assets/DS3.webp"; 
import DS4 from "../assets/DS4.jpg"; 
import DS5 from "../assets/DS5.jpg"; 
import DS6 from "../assets/DS6.jpg"; 
import DS7 from "../assets/DS7.webp"; 
import DS8 from "../assets/DS8.png"; 
 // optional extra image

// ================= Marketing & Sales =================
import MS1 from "../assets/MS1.webp"; 
import MS2 from "../assets/MS2.webp"; 
import MS3 from "../assets/MS3.webp"; 
import MS4 from "../assets/MS4.webp"; 
import MS5 from "../assets/mL5.webp"; 
import MS6 from "../assets/MS6.jpg"; 
import MS7 from "../assets/MS7.webp"; 
import MS8 from "../assets/MS8.webp"; 
import MS9 from "../assets/MS9.jpg"; 
import MS10 from "../assets/MS10.webp"; 
import MS11 from "../assets/MS11.jpg"; 
import OIP from "../assets/OIP.webp"; // Business Strategy Course
import demoVideo from '../assets/demo.mp4'
// ================= Design & Creative / UI UX =================
import UIUX from "../assets/UIUX.webp"; // UI UX First
// Third Course

import UIUX2 from "../assets/UIUX2.webp"; // Fourth
import UIUX3 from "../assets/UIUX1.jpg"; // Fifth
import UIUX4 from "../assets/UIUX4.webp"; // Sixth
import UIUX5 from "../assets/UIUX5.webp"; // Seventh
import UIUX6 from "../assets/UIUX6.webp"; // Eighth
import UIUX1111 from "../assets/UIUX1.jpg"; // Ninth
import UIUX8 from "../assets/UIUX8.webp"; // Tenth
import UIUX9 from "../assets/UIUX9.webp"; // Eleventh
import UIUX10 from "../assets/UIUX10.webp"; // Twelfth
import UIUX11 from "../assets/UIUX11.webp"; // Thirteenth
import UIUX12 from "../assets/UIUX12.jpg"; // Fourteenth

// ================= React Course =================
import ReactCourse from "../assets/ReactCourse.png";

// ================= Machine Learning =================
import MachineLearning from "../assets/MachineLearning.png";

// ================= Digital Marketing =================
import DigitalMarketing from "../assets/DigitalMarketing.jpg";

export const coursesData = [
  // ================= Programming (10) =================
  { id: 1, category: "Programming", title: "React for Beginners", instructor: "Ahmed", duration: "10h 30m", lectures: 12, price: "$49.99", rating: 4.5, image: PR1 ,    curriculum: [
       {
    title: "Introduction",
    lessons: [
      { title: "Advanced JSX", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
    ],
  },
  {
    title: "React Basics",
    lessons: [
      { title: "Hooks Introduction", video: demoVideo },
      { title: "useState Deep Dive", video: demoVideo },
      { title: "useEffect Deep Dive", video: demoVideo },
    ],
  },
  {
    title: "Intermediate Concepts",
    lessons: [
      { title: "Context API", video: demoVideo },
      { title: "Custom Hooks", video: demoVideo },
      { title: "Performance Optimization", video: demoVideo },
      { title: "React Router Advanced", video: demoVideo },
    ],
  },
  {
    title: "Advanced Topics",
    lessons: [
      { title: "Error Boundaries", video: demoVideo },
      { title: "Testing React Components", video: demoVideo },
      { title: "State Management with Redux", video: demoVideo },
      { title: "Integration with APIs", video: demoVideo },
      { title: "Authentication & Authorization", video: demoVideo },
      { title: "Final Project", video: demoVideo },
    ],
  },
    ]
  },
  
  { id: 2, category: "Programming", title: "Advanced React", instructor: "Osama", duration: "11h 00m", lectures: 14, price: "$54.99", rating: 4.6, image: PR1,curriculum: [
      {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Advanced React", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Project Setup & Tools", video: demoVideo },
    ],
  },
  {
    title: "JSX & Components Deep Dive",
    lessons: [
      { title: "Advanced JSX Patterns", video: demoVideo },
      { title: "Functional vs Class Components", video: demoVideo },
      { title: "Props & Children", video: demoVideo },
      { title: "Component Composition", video: demoVideo },
    ],
  },
  {
    title: "Hooks Mastery",
    lessons: [
      { title: "Hooks Introduction", video: demoVideo },
      { title: "useState Deep Dive", video: demoVideo },
      { title: "useEffect Deep Dive", video: demoVideo },
      { title: "useContext & Context API", video: demoVideo },
      { title: "Custom Hooks", video: demoVideo },
    ],
  },
  {
    title: "Routing & State Management",
    lessons: [
      { title: "React Router Advanced", video: demoVideo },
      { title: "State Management with Redux", video: demoVideo },
      { title: "Global State Patterns", video: demoVideo },
    ],
  },
  {
    title: "Advanced Techniques",
    lessons: [
      { title: "Performance Optimization", video: demoVideo },
      { title: "Error Boundaries", video: demoVideo },
      { title: "Testing React Components", video: demoVideo },
      { title: "Integration with APIs", video: demoVideo },
      { title: "Authentication & Authorization", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Planning & Setup", video: demoVideo },
      { title: "Building Features", video: demoVideo },
      { title: "Connecting APIs", video: demoVideo },
      { title: "Deploying the App", video: demoVideo },
    ],
  },
  ]},
  { id: 3, category: "Programming", title: "JavaScript Mastery", instructor: "Khalid", duration: "9h 20m", lectures: 11, price: "$44.99", rating: 4.4, image: PR2 , curriculum: [
    {
    title: "Introduction",
    lessons: [
      { title: "Welcome to JavaScript Mastery", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Setting Up Your Environment", video: demoVideo },
    ],
  },
  {
    title: "JavaScript Basics",
    lessons: [
      { title: "Variables & Data Types", video: demoVideo },
      { title: "Operators & Expressions", video: demoVideo },
      { title: "Conditionals & Loops", video: demoVideo },
      { title: "Functions & Scope", video: demoVideo },
    ],
  },
  {
    title: "Intermediate JavaScript",
    lessons: [
      { title: "Arrays & Objects", video: demoVideo },
      { title: "DOM Manipulation", video: demoVideo },
      { title: "Events & Event Listeners", video: demoVideo },
      { title: "Template Literals & String Methods", video: demoVideo },
    ],
  },
  {
    title: "Advanced Concepts",
    lessons: [
      { title: "ES6+ Features", video: demoVideo },
      { title: "Arrow Functions & Destructuring", video: demoVideo },
      { title: "Spread & Rest Operators", video: demoVideo },
      { title: "Modules & Import/Export", video: demoVideo },
    ],
  },
  {
    title: "Asynchronous JavaScript",
    lessons: [
      { title: "Callbacks & Callback Hell", video: demoVideo },
      { title: "Promises & Chaining", video: demoVideo },
      { title: "Async/Await", video: demoVideo },
      { title: "Fetching Data from APIs", video: demoVideo },
    ],
  },
  {
    title: "Advanced JavaScript Techniques",
    lessons: [
      { title: "Closures & Lexical Scope", video: demoVideo },
      { title: "Higher-Order Functions", video: demoVideo },
      { title: "Event Loop & JavaScript Runtime", video: demoVideo },
      { title: "Error Handling & Debugging", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Planning & Setup", video: demoVideo },
      { title: "Building Features", video: demoVideo },
      { title: "Connecting APIs & DOM Manipulation", video: demoVideo },
      { title: "Deploying Your Project", video: demoVideo },
    ],
  },
  ] },
  { id: 4, category: "Programming", title: "Node.js Basics", instructor: "Waleed", duration: "8h 15m", lectures: 10, price: "$39.99", rating: 4.2, image: PR3 ,curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Node.js", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Setting Up Node.js Environment", video: demoVideo },
    ],
  },
  {
    title: "Node.js Fundamentals",
    lessons: [
      { title: "What is Node.js?", video: demoVideo },
      { title: "Node.js Architecture & Event Loop", video: demoVideo },
      { title: "Modules & require()", video: demoVideo },
      { title: "Global Objects & Process", video: demoVideo },
    ],
  },
  {
    title: "File System & Core Modules",
    lessons: [
      { title: "Working with File System (fs)", video: demoVideo },
      { title: "Path & OS Modules", video: demoVideo },
      { title: "HTTP Module Basics", video: demoVideo },
    ],
  },
  {
    title: "Working with npm",
    lessons: [
      { title: "Introduction to npm", video: demoVideo },
      { title: "Installing & Managing Packages", video: demoVideo },
      { title: "Package.json & Scripts", video: demoVideo },
    ],
  },
  {
    title: "Creating a Server",
    lessons: [
      { title: "Creating a Simple HTTP Server", video: demoVideo },
      { title: "Routing Basics", video: demoVideo },
      { title: "Serving HTML & JSON", video: demoVideo },
    ],
  },
  {
    title: "Express.js Basics",
    lessons: [
      { title: "Introduction to Express.js", video: demoVideo },
      { title: "Routing in Express", video: demoVideo },
      { title: "Middleware in Express", video: demoVideo },
      { title: "Handling Forms & JSON Data", video: demoVideo },
    ],
  },
  {
    title: "Working with Databases",
    lessons: [
      { title: "Introduction to MongoDB", video: demoVideo },
      { title: "CRUD Operations", video: demoVideo },
      { title: "Connecting Node.js with MongoDB", video: demoVideo },
    ],
  },
  {
    title: "Advanced Node.js",
    lessons: [
      { title: "Error Handling & Debugging", video: demoVideo },
      { title: "Environment Variables", video: demoVideo },
      { title: "Project Structure & Best Practices", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Building Core Features", video: demoVideo },
      { title: "Integrating Database & APIs", video: demoVideo },
      { title: "Deploying Your Node.js App", video: demoVideo },
    ],
  },
]},

  { id: 5, category: "Programming", title: "Frontend Fundamentals", instructor: "Rashed", duration: "7h 50m", lectures: 9, price: "$34.99", rating: 4.1, image: FrontEnd,curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Frontend Development", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Setting Up Development Environment", video: demoVideo },
    ],
  },
  {
    title: "HTML Basics",
    lessons: [
      { title: "Introduction to HTML", video: demoVideo },
      { title: "HTML Elements & Structure", video: demoVideo },
      { title: "Forms and Inputs", video: demoVideo },
      { title: "Semantic HTML", video: demoVideo },
    ],
  },
  {
    title: "CSS Fundamentals",
    lessons: [
      { title: "Introduction to CSS", video: demoVideo },
      { title: "Selectors, Properties & Values", video: demoVideo },
      { title: "Box Model & Layout", video: demoVideo },
      { title: "Flexbox Basics", video: demoVideo },
      { title: "CSS Grid Basics", video: demoVideo },
    ],
  },
  {
    title: "JavaScript Basics for Frontend",
    lessons: [
      { title: "Variables & Data Types", video: demoVideo },
      { title: "Functions & Scope", video: demoVideo },
      { title: "DOM Manipulation", video: demoVideo },
      { title: "Events & Event Listeners", video: demoVideo },
    ],
  },
  {
    title: "Advanced CSS & Responsive Design",
    lessons: [
      { title: "Media Queries", video: demoVideo },
      { title: "CSS Transitions & Animations", video: demoVideo },
      { title: "CSS Variables & Custom Properties", video: demoVideo },
    ],
  },
  {
    title: "Frontend Tools & Best Practices",
    lessons: [
      { title: "Browser DevTools", video: demoVideo },
      { title: "Version Control with Git", video: demoVideo },
      { title: "Code Organization & Best Practices", video: demoVideo },
    ],
  },
  {
    title: "Projects & Final Assignment",
    lessons: [
      { title: "Mini Project: Landing Page", video: demoVideo },
      { title: "Mini Project: Portfolio Site", video: demoVideo },
      { title: "Final Project: Complete Frontend App", video: demoVideo },
    ],
  },
]
 },
  { id: 6, category: "Programming", title: "Backend with Express", instructor: "Muaadh", duration: "10h 45m", lectures: 12, price: "$49.99", rating: 4.5, image: PR4, curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Express.js", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Setting Up Node.js & Express Environment", video: demoVideo },
    ],
  },
  {
    title: "Express Basics",
    lessons: [
      { title: "Introduction to Express.js", video: demoVideo },
      { title: "Creating Your First Express Server", video: demoVideo },
      { title: "Routing in Express", video: demoVideo },
      { title: "Middleware in Express", video: demoVideo },
    ],
  },
  {
    title: "Handling Requests & Responses",
    lessons: [
      { title: "Query Parameters & URL Params", video: demoVideo },
      { title: "Handling POST Requests & Body Parsing", video: demoVideo },
      { title: "Sending JSON & HTML Responses", video: demoVideo },
    ],
  },
  {
    title: "Templating & Views",
    lessons: [
      { title: "Using EJS Templates", video: demoVideo },
      { title: "Dynamic Content Rendering", video: demoVideo },
      { title: "Partial Templates & Layouts", video: demoVideo },
    ],
  },
  {
    title: "Working with Databases",
    lessons: [
      { title: "Introduction to MongoDB", video: demoVideo },
      { title: "CRUD Operations with MongoDB", video: demoVideo },
      { title: "Connecting Express with MongoDB", video: demoVideo },
    ],
  },
  {
    title: "Authentication & Security",
    lessons: [
      { title: "User Authentication Basics", video: demoVideo },
      { title: "Using JWT for Authentication", video: demoVideo },
      { title: "Protecting Routes & Middleware", video: demoVideo },
    ],
  },
  {
    title: "Error Handling & Advanced Concepts",
    lessons: [
      { title: "Error Handling in Express", video: demoVideo },
      { title: "Environment Variables & Config", video: demoVideo },
      { title: "Structuring Your Project", video: demoVideo },
      { title: "Performance Optimization", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Building Core Features", video: demoVideo },
      { title: "Integrating Database & APIs", video: demoVideo },
      { title: "Deploying Your Express App", video: demoVideo },
    ],
  },
]
 },
  { id: 7, category: "Programming", title: "Fullstack Project", instructor: "Ahmed", duration: "12h 00m", lectures: 15, price: "$59.99", rating: 4.7, image: PR5 ,curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Fullstack Project", video: demoVideo },
      { title: "Course Overview & Project Idea", video: demoVideo },
      { title: "Setting Up Development Environment", video: demoVideo },
    ],
  },
  {
    title: "Frontend Setup",
    lessons: [
      { title: "Creating React App", video: demoVideo },
      { title: "Project Structure & Components", video: demoVideo },
      { title: "Routing with React Router", video: demoVideo },
      { title: "State Management Basics", video: demoVideo },
    ],
  },
  {
    title: "Backend Setup",
    lessons: [
      { title: "Setting Up Node.js & Express", video: demoVideo },
      { title: "Creating API Routes", video: demoVideo },
      { title: "Connecting to Database", video: demoVideo },
      { title: "CRUD Operations", video: demoVideo },
    ],
  },
  {
    title: "Frontend Development",
    lessons: [
      { title: "Building Pages & Components", video: demoVideo },
      { title: "Handling Forms & User Input", video: demoVideo },
      { title: "Fetching Data from API", video: demoVideo },
      { title: "State Management with Context or Redux", video: demoVideo },
    ],
  },
  {
    title: "Backend Development",
    lessons: [
      { title: "User Authentication & Authorization", video: demoVideo },
      { title: "Protecting Routes & Middleware", video: demoVideo },
      { title: "Error Handling & Validation", video: demoVideo },
    ],
  },
  {
    title: "Integrating Frontend & Backend",
    lessons: [
      { title: "Connecting React with Express APIs", video: demoVideo },
      { title: "Handling Auth & Tokens", video: demoVideo },
      { title: "Real-Time Features (Optional)", video: demoVideo },
    ],
  },
  {
    title: "Advanced Features",
    lessons: [
      { title: "File Uploads & Media Handling", video: demoVideo },
      { title: "Notifications & Alerts", video: demoVideo },
      { title: "Performance Optimization", video: demoVideo },
      { title: "Security Best Practices", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup & Planning", video: demoVideo },
      { title: "Implementing Core Features", video: demoVideo },
      { title: "Testing & Debugging", video: demoVideo },
      { title: "Deployment & Hosting", video: demoVideo },
      { title: "Project Review & Next Steps", video: demoVideo },
    ],
  },
]
},
  { id: 8, category: "Programming", title: "HTML & CSS Basics", instructor: "Khalid", duration: "6h 30m", lectures: 8, price: "$29.99", rating: 4.0, image: PR6,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to HTML & CSS", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Setting Up Your Development Environment", video: demoVideo },
    ],
  },
  {
    title: "HTML Fundamentals",
    lessons: [
      { title: "Introduction to HTML", video: demoVideo },
      { title: "HTML Elements & Structure", video: demoVideo },
      { title: "Headings, Paragraphs & Text Formatting", video: demoVideo },
      { title: "Links, Images & Lists", video: demoVideo },
      { title: "Forms & Input Fields", video: demoVideo },
    ],
  },
  {
    title: "CSS Fundamentals",
    lessons: [
      { title: "Introduction to CSS", video: demoVideo },
      { title: "Selectors, Classes & IDs", video: demoVideo },
      { title: "Colors, Fonts & Typography", video: demoVideo },
      { title: "Box Model & Spacing (Margin & Padding)", video: demoVideo },
      { title: "Positioning & Display", video: demoVideo },
    ],
  },
  {
    title: "Layout & Design",
    lessons: [
      { title: "Flexbox Basics", video: demoVideo },
      { title: "Grid Layout Basics", video: demoVideo },
      { title: "Responsive Design Basics", video: demoVideo },
      { title: "Navigation Menus & Header/Footer", video: demoVideo },
    ],
  },
  {
    title: "Advanced CSS",
    lessons: [
      { title: "Pseudo-classes & Pseudo-elements", video: demoVideo },
      { title: "Transitions & Animations", video: demoVideo },
      { title: "Hover Effects & Buttons", video: demoVideo },
      { title: "Backgrounds, Gradients & Shadows", video: demoVideo },
    ],
  },
  {
    title: "Project",
    lessons: [
      { title: "Project Setup & Planning", video: demoVideo },
      { title: "Building a Simple Website", video: demoVideo },
      { title: "Styling & Layouts", video: demoVideo },
      { title: "Final Touches & Review", video: demoVideo },
    ],
  },
]

   },
  { id: 9, category: "Programming", title: "TypeScript Essentials", instructor: "Waleed", duration: "7h 45m", lectures: 9, price: "$34.99", rating: 4.2, image: PR7,curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to TypeScript", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Installing & Setting Up TypeScript", video: demoVideo },
    ],
  },
  {
    title: "TypeScript Basics",
    lessons: [
      { title: "Understanding Types", video: demoVideo },
      { title: "Variables & Constants", video: demoVideo },
      { title: "Functions & Return Types", video: demoVideo },
      { title: "Interfaces & Type Aliases", video: demoVideo },
    ],
  },
  {
    title: "Advanced Types",
    lessons: [
      { title: "Union & Intersection Types", video: demoVideo },
      { title: "Literal Types & Enums", video: demoVideo },
      { title: "Generics Basics", video: demoVideo },
      { title: "Type Assertions & Type Guards", video: demoVideo },
    ],
  },
  {
    title: "Classes & OOP in TypeScript",
    lessons: [
      { title: "Classes & Constructors", video: demoVideo },
      { title: "Inheritance & Polymorphism", video: demoVideo },
      { title: "Access Modifiers", video: demoVideo },
      { title: "Abstract Classes & Interfaces", video: demoVideo },
    ],
  },
  {
    title: "Modules & Advanced Features",
    lessons: [
      { title: "Modules & Import/Export", video: demoVideo },
      { title: "Namespaces", video: demoVideo },
      { title: "Decorators & Advanced Patterns", video: demoVideo },
    ],
  },
  {
    title: "Project",
    lessons: [
      { title: "Project Setup & Planning", video: demoVideo },
      { title: "Building a TypeScript Application", video: demoVideo },
      { title: "Working with APIs", video: demoVideo },
      { title: "Final Review & Deployment", video: demoVideo },
    ],
  },
]
 },
  { id: 10, category: "Programming", title: "React Hooks Deep Dive", instructor: "Osama", duration: "8h 20m", lectures: 10, price: "$39.99", rating: 4.3, image: PR6 ,curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to React Hooks", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
    ],
  },
  {
    title: "useState Hook",
    lessons: [
      { title: "Introduction to useState", video: demoVideo },
      { title: "Managing State in Functional Components", video: demoVideo },
      { title: "State with Objects & Arrays", video: demoVideo },
      { title: "Best Practices with useState", video: demoVideo },
    ],
  },
  {
    title: "useEffect Hook",
    lessons: [
      { title: "Introduction to useEffect", video: demoVideo },
      { title: "Side Effects & Lifecycle in Functional Components", video: demoVideo },
      { title: "Dependency Arrays Explained", video: demoVideo },
      { title: "Cleanup Functions & Optimization", video: demoVideo },
    ],
  },
  {
    title: "Custom Hooks",
    lessons: [
      { title: "Why Custom Hooks?", video: demoVideo },
      { title: "Creating Reusable Hooks", video: demoVideo },
      { title: "Sharing Logic Across Components", video: demoVideo },
    ],
  },
  {
    title: "Context API with Hooks",
    lessons: [
      { title: "Introduction to Context API", video: demoVideo },
      { title: "Providing and Consuming Context", video: demoVideo },
      { title: "Context + useReducer", video: demoVideo },
    ],
  },
  {
    title: "Advanced Hooks Patterns",
    lessons: [
      { title: "useReducer Deep Dive", video: demoVideo },
      { title: "useRef for DOM & State Persistence", video: demoVideo },
      { title: "useMemo & useCallback for Optimization", video: demoVideo },
      { title: "Testing Components with Hooks", video: demoVideo },
    ],
  },
  {
    title: "Project",
    lessons: [
      { title: "Project Setup & Planning", video: demoVideo },
      { title: "Building Core Features with Hooks", video: demoVideo },
      { title: "Managing State and Effects", video: demoVideo },
      { title: "Final Review & Deployment", video: demoVideo },
    ],
  },
]
},

  // ================= AI (10) =================
  { id: 11, category: "AI", title: "Machine Learning Basics", instructor: "Khalid", duration: "8h 20m", lectures: 10, price: "$39.99", rating: 4.2, image: ML1,curriculum: [
  {
    title: "Introduction to Machine Learning",
    lessons: [
      { title: "Welcome to Machine Learning", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Applications of Machine Learning", video: demoVideo },
    ],
  },
  {
    title: "Python & Data Preparation",
    lessons: [
      { title: "Python for Machine Learning", video: demoVideo },
      { title: "Working with Libraries (NumPy, Pandas, Matplotlib)", video: demoVideo },
      { title: "Data Cleaning & Preprocessing", video: demoVideo },
      { title: "Feature Engineering Basics", video: demoVideo },
    ],
  },
  {
    title: "Supervised Learning",
    lessons: [
      { title: "Introduction to Supervised Learning", video: demoVideo },
      { title: "Linear Regression", video: demoVideo },
      { title: "Logistic Regression", video: demoVideo },
      { title: "Decision Trees & Random Forests", video: demoVideo },
    ],
  },
  {
    title: "Unsupervised Learning",
    lessons: [
      { title: "Introduction to Unsupervised Learning", video: demoVideo },
      { title: "Clustering: K-Means", video: demoVideo },
      { title: "Dimensionality Reduction: PCA", video: demoVideo },
    ],
  },
  {
    title: "Model Evaluation & Optimization",
    lessons: [
      { title: "Training and Testing Models", video: demoVideo },
      { title: "Metrics for Evaluation", video: demoVideo },
      { title: "Hyperparameter Tuning", video: demoVideo },
      { title: "Avoiding Overfitting & Underfitting", video: demoVideo },
    ],
  },
  {
    title: "Project",
    lessons: [
      { title: "Project Overview", video: demoVideo },
      { title: "Building a Supervised Learning Model", video: demoVideo },
      { title: "Evaluating the Model", video: demoVideo },
      { title: "Deploying Your Model", video: demoVideo },
    ],
  },
]
 },
  { id: 12, category: "AI", title: "AI for Beginners", instructor: "Ahmed", duration: "9h 10m", lectures: 11, price: "$44.99", rating: 4.3, image: ML2,curriculum: [
  {
    title: "Introduction to AI",
    lessons: [
      { title: "Welcome to Artificial Intelligence", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "History of AI", video: demoVideo },
      { title: "Applications of AI", video: demoVideo },
    ],
  },
  {
    title: "AI Concepts & Terminology",
    lessons: [
      { title: "What is AI?", video: demoVideo },
      { title: "Machine Learning vs AI", video: demoVideo },
      { title: "Supervised, Unsupervised & Reinforcement Learning", video: demoVideo },
      { title: "AI Algorithms Overview", video: demoVideo },
    ],
  },
  {
    title: "Python for AI",
    lessons: [
      { title: "Setting up Python Environment", video: demoVideo },
      { title: "Python Libraries for AI (NumPy, Pandas, Matplotlib)", video: demoVideo },
      { title: "Data Preprocessing Basics", video: demoVideo },
    ],
  },
  {
    title: "Building AI Models",
    lessons: [
      { title: "Simple Linear Regression", video: demoVideo },
      { title: "Classification Models", video: demoVideo },
      { title: "Introduction to Neural Networks", video: demoVideo },
    ],
  },
  {
    title: "Evaluating & Improving AI Models",
    lessons: [
      { title: "Training vs Testing Data", video: demoVideo },
      { title: "Model Evaluation Metrics", video: demoVideo },
      { title: "Hyperparameter Tuning", video: demoVideo },
      { title: "Avoiding Overfitting & Underfitting", video: demoVideo },
    ],
  },
  {
    title: "AI Project",
    lessons: [
      { title: "Project Overview", video: demoVideo },
      { title: "Implementing an AI Model", video: demoVideo },
      { title: "Evaluating Your Model", video: demoVideo },
      { title: "Deploying the AI Solution", video: demoVideo },
    ],
  },
]
 },
  { id: 13, category: "AI", title: "Deep Learning Fundamentals", instructor: "Waleed", duration: "10h 00m", lectures: 12, price: "$49.99", rating: 4.5, image: ML4,curriculum: [
  {
    title: "Introduction to Deep Learning",
    lessons: [
      { title: "Welcome to Deep Learning", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "History of Deep Learning", video: demoVideo },
      { title: "Applications of Deep Learning", video: demoVideo },
    ],
  },
  {
    title: "Neural Networks Basics",
    lessons: [
      { title: "What is a Neural Network?", video: demoVideo },
      { title: "Perceptrons and Activation Functions", video: demoVideo },
      { title: "Feedforward Neural Networks", video: demoVideo },
    ],
  },
  {
    title: "Deep Learning Techniques",
    lessons: [
      { title: "Backpropagation & Gradient Descent", video: demoVideo },
      { title: "Optimizers and Loss Functions", video: demoVideo },
      { title: "Regularization Techniques", video: demoVideo },
    ],
  },
  {
    title: "Advanced Architectures",
    lessons: [
      { title: "Convolutional Neural Networks (CNNs)", video: demoVideo },
      { title: "Recurrent Neural Networks (RNNs)", video: demoVideo },
      { title: "Long Short-Term Memory (LSTM)", video: demoVideo },
      { title: "Transformers Overview", video: demoVideo },
    ],
  },
  {
    title: "Training & Evaluation",
    lessons: [
      { title: "Preparing Datasets", video: demoVideo },
      { title: "Training Deep Networks", video: demoVideo },
      { title: "Evaluation Metrics", video: demoVideo },
      { title: "Hyperparameter Tuning", video: demoVideo },
    ],
  },
  {
    title: "Deep Learning Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Building Your Deep Learning Model", video: demoVideo },
      { title: "Testing & Evaluation", video: demoVideo },
      { title: "Deploying the Model", video: demoVideo },
    ],
  },
]
 },
  { id: 14, category: "AI", title: "Python for AI", instructor: "Muaadh", duration: "7h 50m", lectures: 9, price: "$34.99", rating: 4.1, image: ML5, curriculum: [
  {
    title: "Introduction to Python for AI",
    lessons: [
      { title: "Welcome to Python for AI", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Why Python for AI?", video: demoVideo },
    ],
  },
  {
    title: "Python Basics",
    lessons: [
      { title: "Python Syntax & Variables", video: demoVideo },
      { title: "Data Types & Operators", video: demoVideo },
      { title: "Control Flow: if, for, while", video: demoVideo },
      { title: "Functions & Modules", video: demoVideo },
    ],
  },
  {
    title: "Data Structures",
    lessons: [
      { title: "Lists, Tuples & Sets", video: demoVideo },
      { title: "Dictionaries", video: demoVideo },
      { title: "Comprehensions & Iterators", video: demoVideo },
    ],
  },
  {
    title: "Working with Libraries",
    lessons: [
      { title: "NumPy Basics", video: demoVideo },
      { title: "Pandas for Data Handling", video: demoVideo },
      { title: "Matplotlib & Seaborn for Visualization", video: demoVideo },
    ],
  },
  {
    title: "Python for AI Projects",
    lessons: [
      { title: "Loading & Cleaning Data", video: demoVideo },
      { title: "Feature Engineering", video: demoVideo },
      { title: "Building a Simple AI Model", video: demoVideo },
      { title: "Model Evaluation & Optimization", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Implementing the AI Model", video: demoVideo },
      { title: "Testing & Evaluation", video: demoVideo },
      { title: "Deploying Your Python AI Project", video: demoVideo },
    ],
  },
]
 },
  { id: 15, category: "AI", title: "Computer Vision Basics", instructor: "Osama", duration: "8h 45m", lectures: 10, price: "$39.99", rating: 4.2, image: ML5, curriculum: [
  {
    title: "Introduction to Computer Vision",
    lessons: [
      { title: "Welcome to Computer Vision", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Applications of Computer Vision", video: demoVideo },
    ],
  },
  {
    title: "Image Processing Fundamentals",
    lessons: [
      { title: "Pixels, Color Spaces & Formats", video: demoVideo },
      { title: "Image Filtering & Transformation", video: demoVideo },
      { title: "Edge Detection & Contours", video: demoVideo },
    ],
  },
  {
    title: "OpenCV Basics",
    lessons: [
      { title: "Installing & Setting Up OpenCV", video: demoVideo },
      { title: "Reading & Writing Images", video: demoVideo },
      { title: "Resizing, Cropping & Rotating Images", video: demoVideo },
    ],
  },
  {
    title: "Feature Detection & Recognition",
    lessons: [
      { title: "Detecting Features & Keypoints", video: demoVideo },
      { title: "Face & Object Detection", video: demoVideo },
      { title: "Image Matching & Tracking", video: demoVideo },
    ],
  },
  {
    title: "Deep Learning for Vision",
    lessons: [
      { title: "CNNs Basics", video: demoVideo },
      { title: "Pretrained Models for CV", video: demoVideo },
      { title: "Image Classification Example", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Building a Computer Vision Application", video: demoVideo },
      { title: "Testing & Evaluation", video: demoVideo },
      { title: "Deploying Your CV Project", video: demoVideo },
    ],
  },
]
 },
  { id: 16, category: "AI", title: "Natural Language Processing", instructor: "Rashed", duration: "9h 30m", lectures: 11, price: "$44.99", rating: 4.3, image: ML6,
    curriculum: [
  {
    title: "Introduction to NLP",
    lessons: [
      { title: "Welcome to NLP", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Applications of NLP", video: demoVideo },
    ],
  },
  {
    title: "Text Preprocessing",
    lessons: [
      { title: "Tokenization & Lemmatization", video: demoVideo },
      { title: "Stop Words & Stemming", video: demoVideo },
      { title: "Text Normalization", video: demoVideo },
    ],
  },
  {
    title: "Feature Extraction",
    lessons: [
      { title: "Bag of Words", video: demoVideo },
      { title: "TF-IDF", video: demoVideo },
      { title: "Word Embeddings & Word2Vec", video: demoVideo },
    ],
  },
  {
    title: "NLP with Python",
    lessons: [
      { title: "Introduction to NLTK", video: demoVideo },
      { title: "Introduction to spaCy", video: demoVideo },
      { title: "Text Classification Example", video: demoVideo },
    ],
  },
  {
    title: "Advanced NLP Concepts",
    lessons: [
      { title: "Sequence Models & RNNs", video: demoVideo },
      { title: "Attention Mechanism & Transformers", video: demoVideo },
      { title: "Sentiment Analysis Example", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Building an NLP Application", video: demoVideo },
      { title: "Testing & Evaluation", video: demoVideo },
      { title: "Deploying Your NLP Project", video: demoVideo },
    ],
  },
]

   },
  { id: 17, category: "AI", title: "AI Project Development", instructor: "Ahmed", duration: "10h 15m", lectures: 12, price: "$49.99", rating: 4.5, image: ML7,curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to AI Project Development", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Project Goals & Requirements", video: demoVideo },
    ],
  },
  {
    title: "Project Planning",
    lessons: [
      { title: "Defining the Problem", video: demoVideo },
      { title: "Selecting the Dataset", video: demoVideo },
      { title: "Project Architecture", video: demoVideo },
    ],
  },
  {
    title: "Data Preparation",
    lessons: [
      { title: "Data Cleaning & Preprocessing", video: demoVideo },
      { title: "Feature Engineering", video: demoVideo },
      { title: "Data Splitting & Validation", video: demoVideo },
    ],
  },
  {
    title: "Model Development",
    lessons: [
      { title: "Choosing the Right Model", video: demoVideo },
      { title: "Training the Model", video: demoVideo },
      { title: "Evaluating Performance", video: demoVideo },
    ],
  },
  {
    title: "Model Optimization",
    lessons: [
      { title: "Hyperparameter Tuning", video: demoVideo },
      { title: "Regularization Techniques", video: demoVideo },
      { title: "Improving Accuracy & Efficiency", video: demoVideo },
    ],
  },
  {
    title: "Integration & Deployment",
    lessons: [
      { title: "Integrating Model with Application", video: demoVideo },
      { title: "Creating an API for AI Model", video: demoVideo },
      { title: "Deploying AI Project to Production", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Building Core Features", video: demoVideo },
      { title: "Testing & Validation", video: demoVideo },
      { title: "Final Deployment", video: demoVideo },
    ],
  },
]
 },
  { id: 18, category: "AI", title: "Reinforcement Learning", instructor: "Khalid", duration: "8h 20m", lectures: 10, price: "$39.99", rating: 4.2, image: ML8,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Reinforcement Learning", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Key Concepts & Applications", video: demoVideo },
    ],
  },
  {
    title: "Fundamentals of RL",
    lessons: [
      { title: "Agents, Environment, and Rewards", video: demoVideo },
      { title: "Markov Decision Processes (MDP)", video: demoVideo },
      { title: "Policy, Value Function & Returns", video: demoVideo },
    ],
  },
  {
    title: "Model-Free Methods",
    lessons: [
      { title: "Dynamic Programming", video: demoVideo },
      { title: "Monte Carlo Methods", video: demoVideo },
      { title: "Temporal Difference Learning", video: demoVideo },
    ],
  },
  {
    title: "Deep Reinforcement Learning",
    lessons: [
      { title: "Introduction to Deep RL", video: demoVideo },
      { title: "Deep Q-Networks (DQN)", video: demoVideo },
      { title: "Policy Gradient Methods", video: demoVideo },
    ],
  },
  {
    title: "Exploration & Exploitation",
    lessons: [
      { title: "Epsilon-Greedy Strategy", video: demoVideo },
      { title: "Upper Confidence Bound (UCB)", video: demoVideo },
      { title: "Softmax Action Selection", video: demoVideo },
    ],
  },
  {
    title: "Applications & Projects",
    lessons: [
      { title: "RL for Games", video: demoVideo },
      { title: "RL for Robotics", video: demoVideo },
      { title: "RL for Real-World Problems", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Implementing RL Agent", video: demoVideo },
      { title: "Training & Evaluation", video: demoVideo },
      { title: "Final Deployment", video: demoVideo },
    ],
  },
]

   },
  { id: 19, category: "AI", title: "AI in Robotics", instructor: "Waleed", duration: "7h 50m", lectures: 9, price: "$34.99", rating: 4.1, image: ML3,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to AI in Robotics", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Robotics & AI: Applications", video: demoVideo },
    ],
  },
  {
    title: "Robotics Fundamentals",
    lessons: [
      { title: "Robotics Components & Sensors", video: demoVideo },
      { title: "Actuators and Control Systems", video: demoVideo },
      { title: "Kinematics & Dynamics", video: demoVideo },
    ],
  },
  {
    title: "AI Techniques in Robotics",
    lessons: [
      { title: "Machine Learning for Robots", video: demoVideo },
      { title: "Reinforcement Learning in Robotics", video: demoVideo },
      { title: "Computer Vision for Robotics", video: demoVideo },
    ],
  },
  {
    title: "Autonomous Robots",
    lessons: [
      { title: "Path Planning & Navigation", video: demoVideo },
      { title: "Localization & Mapping", video: demoVideo },
      { title: "Obstacle Avoidance", video: demoVideo },
    ],
  },
  {
    title: "Robot Perception",
    lessons: [
      { title: "Sensor Fusion Techniques", video: demoVideo },
      { title: "Object Detection & Tracking", video: demoVideo },
      { title: "Human-Robot Interaction Basics", video: demoVideo },
    ],
  },
  {
    title: "AI Robotics Projects",
    lessons: [
      { title: "Simulated Robot Projects", video: demoVideo },
      { title: "Physical Robot Implementation", video: demoVideo },
      { title: "Testing & Optimization", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Building AI Robot Agent", video: demoVideo },
      { title: "Integrating Sensors & AI", video: demoVideo },
      { title: "Final Testing & Deployment", video: demoVideo },
    ],
  },
]

   },
  { id: 20, category: "AI", title: "Advanced Machine Learning", instructor: "Muaadh", duration: "9h 40m", lectures: 11, price: "$44.99", rating: 4.3, image: ML9,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Advanced Machine Learning", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Applications of Advanced ML", video: demoVideo },
    ],
  },
  {
    title: "Advanced Supervised Learning",
    lessons: [
      { title: "Gradient Boosting & XGBoost", video: demoVideo },
      { title: "Support Vector Machines (SVM)", video: demoVideo },
      { title: "Ensemble Methods", video: demoVideo },
    ],
  },
  {
    title: "Advanced Unsupervised Learning",
    lessons: [
      { title: "Clustering Techniques", video: demoVideo },
      { title: "Dimensionality Reduction", video: demoVideo },
      { title: "Anomaly Detection", video: demoVideo },
    ],
  },
  {
    title: "Neural Networks & Deep Learning",
    lessons: [
      { title: "Advanced Neural Network Architectures", video: demoVideo },
      { title: "CNNs for Image Recognition", video: demoVideo },
      { title: "RNNs & LSTMs for Sequential Data", video: demoVideo },
      { title: "Transformers & Attention Mechanisms", video: demoVideo },
    ],
  },
  {
    title: "Reinforcement Learning & Optimization",
    lessons: [
      { title: "Markov Decision Processes", video: demoVideo },
      { title: "Q-Learning & Policy Gradient", video: demoVideo },
      { title: "Advanced RL Projects", video: demoVideo },
    ],
  },
  {
    title: "Machine Learning at Scale",
    lessons: [
      { title: "Distributed ML with Spark", video: demoVideo },
      { title: "Model Deployment & Serving", video: demoVideo },
      { title: "ML Pipelines & Best Practices", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Building Advanced ML Models", video: demoVideo },
      { title: "Testing, Evaluation & Optimization", video: demoVideo },
      { title: "Deployment & Presentation", video: demoVideo },
    ],
  },
]

   },

  // ================= Business Analysis (8) =================
  { id: 21, category: "Business Analysis", title: "Business Analysis Fundamentals", instructor: "Ahmed", duration: "6h 30m", lectures: 8, price: "$29.99", rating: 4.0, image: BS1,curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Business Analysis", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Role of a Business Analyst", video: demoVideo },
    ],
  },
  {
    title: "Business Analysis Basics",
    lessons: [
      { title: "Understanding Business Needs", video: demoVideo },
      { title: "Stakeholders & Communication", video: demoVideo },
      { title: "Business Environment & Context", video: demoVideo },
    ],
  },
  {
    title: "Requirement Elicitation",
    lessons: [
      { title: "Gathering Requirements", video: demoVideo },
      { title: "Interviewing Techniques", video: demoVideo },
      { title: "Workshops & Brainstorming", video: demoVideo },
      { title: "Documenting Requirements", video: demoVideo },
    ],
  },
  {
    title: "Modeling & Analysis",
    lessons: [
      { title: "Process Modeling & Flowcharts", video: demoVideo },
      { title: "Use Case & User Stories", video: demoVideo },
      { title: "SWOT & Gap Analysis", video: demoVideo },
    ],
  },
  {
    title: "Tools & Techniques",
    lessons: [
      { title: "Business Analysis Tools Overview", video: demoVideo },
      { title: "Data Analysis for BA", video: demoVideo },
      { title: "Project Management Integration", video: demoVideo },
    ],
  },
  {
    title: "Advanced Topics",
    lessons: [
      { title: "Risk Analysis & Management", video: demoVideo },
      { title: "Stakeholder Management", video: demoVideo },
      { title: "Business Process Optimization", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Requirement Gathering & Analysis", video: demoVideo },
      { title: "Solution Design & Presentation", video: demoVideo },
    ],
  },
]
 },
  { id: 22, category: "Business Analysis", title: "Advanced Business Modeling", instructor: "Khalid", duration: "7h 45m", lectures: 9, price: "$34.99", rating: 4.2, image: BS2,curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Advanced Business Modeling", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Business Models", video: demoVideo },
    ],
  },
  {
    title: "Business Model Fundamentals",
    lessons: [
      { title: "Understanding Business Value", video: demoVideo },
      { title: "Key Components of a Business Model", video: demoVideo },
      { title: "Revenue Streams & Cost Structures", video: demoVideo },
    ],
  },
  {
    title: "Modeling Techniques",
    lessons: [
      { title: "SWOT & PEST Analysis", video: demoVideo },
      { title: "Business Canvas Model", video: demoVideo },
      { title: "Scenario Planning", video: demoVideo },
    ],
  },
  {
    title: "Financial Modeling",
    lessons: [
      { title: "Introduction to Financial Statements", video: demoVideo },
      { title: "Profit & Loss Analysis", video: demoVideo },
      { title: "Forecasting & Budgeting", video: demoVideo },
    ],
  },
  {
    title: "Data-Driven Business Modeling",
    lessons: [
      { title: "Using Data to Refine Models", video: demoVideo },
      { title: "KPIs & Performance Metrics", video: demoVideo },
      { title: "Predictive Analytics for Business", video: demoVideo },
    ],
  },
  {
    title: "Advanced Strategies",
    lessons: [
      { title: "Business Process Optimization", video: demoVideo },
      { title: "Innovation & Competitive Advantage", video: demoVideo },
      { title: "Risk Analysis & Mitigation", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Setting Up Your Business Model Project", video: demoVideo },
      { title: "Applying Advanced Modeling Techniques", video: demoVideo },
      { title: "Presentation & Analysis", video: demoVideo },
    ],
  },
]
 },
  { id: 23, category: "Business Analysis", title: "Project Management Basics", instructor: "Waleed", duration: "8h 20m", lectures: 10, price: "$39.99", rating: 4.2, image: BS2,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Project Management", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "What is Project Management?", video: demoVideo },
    ],
  },
  {
    title: "Project Lifecycle",
    lessons: [
      { title: "Initiation Phase", video: demoVideo },
      { title: "Planning Phase", video: demoVideo },
      { title: "Execution Phase", video: demoVideo },
      { title: "Monitoring & Controlling Phase", video: demoVideo },
      { title: "Closure Phase", video: demoVideo },
    ],
  },
  {
    title: "Project Planning",
    lessons: [
      { title: "Setting Goals & Objectives", video: demoVideo },
      { title: "Work Breakdown Structure (WBS)", video: demoVideo },
      { title: "Resource Planning", video: demoVideo },
      { title: "Project Scheduling & Gantt Charts", video: demoVideo },
    ],
  },
  {
    title: "Risk & Quality Management",
    lessons: [
      { title: "Identifying & Managing Risks", video: demoVideo },
      { title: "Quality Assurance & Control", video: demoVideo },
      { title: "Change Management", video: demoVideo },
    ],
  },
  {
    title: "Team & Communication",
    lessons: [
      { title: "Team Roles & Responsibilities", video: demoVideo },
      { title: "Effective Communication in Projects", video: demoVideo },
      { title: "Conflict Resolution & Leadership", video: demoVideo },
    ],
  },
  {
    title: "Tools & Software",
    lessons: [
      { title: "Project Management Tools Overview", video: demoVideo },
      { title: "Using Trello, Asana & Jira", video: demoVideo },
      { title: "Tracking Progress & Reporting", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Plan Your Project", video: demoVideo },
      { title: "Execute & Monitor", video: demoVideo },
      { title: "Present Project Outcome", video: demoVideo },
    ],
  },
]

   },
  { id: 24, category: "Business Analysis", title: "Data-Driven Decisions", instructor: "Muaadh", duration: "7h 50m", lectures: 9, price: "$34.99", rating: 4.1, image: BS3,curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Data-Driven Decisions", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Data in Decision Making", video: demoVideo },
    ],
  },
  {
    title: "Understanding Data",
    lessons: [
      { title: "Types of Data", video: demoVideo },
      { title: "Data Sources & Collection Methods", video: demoVideo },
      { title: "Data Quality & Cleaning", video: demoVideo },
    ],
  },
  {
    title: "Data Analysis Techniques",
    lessons: [
      { title: "Descriptive Analytics", video: demoVideo },
      { title: "Exploratory Data Analysis (EDA)", video: demoVideo },
      { title: "Data Visualization Techniques", video: demoVideo },
    ],
  },
  {
    title: "Statistical Concepts",
    lessons: [
      { title: "Mean, Median & Mode", video: demoVideo },
      { title: "Variance, Standard Deviation & Correlation", video: demoVideo },
      { title: "Hypothesis Testing Basics", video: demoVideo },
    ],
  },
  {
    title: "Data-Driven Decision Making",
    lessons: [
      { title: "Making Informed Decisions with Data", video: demoVideo },
      { title: "KPIs & Metrics for Decision Making", video: demoVideo },
      { title: "Case Studies & Practical Examples", video: demoVideo },
    ],
  },
  {
    title: "Tools for Data Analysis",
    lessons: [
      { title: "Excel for Data Analysis", video: demoVideo },
      { title: "Power BI & Tableau Overview", video: demoVideo },
      { title: "Python & Pandas Basics", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Analyze a Dataset", video: demoVideo },
      { title: "Make Recommendations", video: demoVideo },
      { title: "Present Your Findings", video: demoVideo },
    ],
  },
]
 },
 {
  id: 25,
  category: "Business Analysis",
  title: "Stakeholder Management",
  instructor: "Osama",
  duration: "6h 40m",
  lectures: 8,
  price: "$29.99",
  rating: 4.0,
  image: BS4,
  curriculum: [
    {
      title: "Introduction",
      lessons: [
        { title: "Welcome to Stakeholder Management", video: demoVideo },
        { title: "Course Overview", video: demoVideo },
        { title: "Importance of Stakeholder Management", video: demoVideo },
      ],
    },
    {
      title: "Identifying Stakeholders",
      lessons: [
        { title: "Types of Stakeholders", video: demoVideo },
        { title: "Mapping Stakeholders", video: demoVideo },
        { title: "Analyzing Stakeholder Influence & Interest", video: demoVideo },
      ],
    },
    {
      title: "Engagement Strategies",
      lessons: [
        { title: "Effective Communication Techniques", video: demoVideo },
        { title: "Building Relationships & Trust", video: demoVideo },
        { title: "Handling Conflicts & Challenges", video: demoVideo },
      ],
    },
    {
      title: "Stakeholder Management Planning",
      lessons: [
        { title: "Creating a Stakeholder Engagement Plan", video: demoVideo },
        { title: "Monitoring & Updating Plans", video: demoVideo },
        { title: "Case Studies & Best Practices", video: demoVideo },
      ],
    },
    {
      title: "Final Project",
      lessons: [
        { title: "Project Setup", video: demoVideo },
        { title: "Applying Stakeholder Management Strategies", video: demoVideo },
        { title: "Review & Presentation", video: demoVideo },
      ],
    },
  ],
},

  { id: 26, category: "Business Analysis", title: "Business Strategy", instructor: "Rashed", duration: "8h 00m", lectures: 10, price: "$39.99", rating: 4.2, image: OIP,
    curriculum: [
    {
      title: "Introduction",
      lessons: [
        { title: "Welcome to Business Strategy", video: demoVideo },
        { title: "Course Overview", video: demoVideo },
        { title: "Importance of Business Strategy", video: demoVideo },
      ],
    },
    {
      title: "Strategic Analysis",
      lessons: [
        { title: "SWOT Analysis", video: demoVideo },
        { title: "PESTLE Analysis", video: demoVideo },
        { title: "Competitive Analysis", video: demoVideo },
      ],
    },
    {
      title: "Strategy Formulation",
      lessons: [
        { title: "Vision, Mission & Objectives", video: demoVideo },
        { title: "Corporate & Business Level Strategies", video: demoVideo },
        { title: "Growth & Diversification Strategies", video: demoVideo },
      ],
    },
    {
      title: "Strategy Implementation",
      lessons: [
        { title: "Resource Allocation", video: demoVideo },
        { title: "Change Management & Leadership", video: demoVideo },
        { title: "Monitoring & KPIs", video: demoVideo },
      ],
    },
    {
      title: "Final Project",
      lessons: [
        { title: "Project Setup", video: demoVideo },
        { title: "Developing a Business Strategy Plan", video: demoVideo },
        { title: "Presentation & Review", video: demoVideo },
      ],
    },
  ],
   },
  { id: 27, category: "Business Analysis", title: "Requirement Gathering", instructor: "Ahmed", duration: "7h 30m", lectures: 9, price: "$34.99", rating: 4.1, image: BS6,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Requirement Gathering", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Requirement Gathering", video: demoVideo },
    ],
  },
  {
    title: "Understanding Stakeholders",
    lessons: [
      { title: "Identifying Stakeholders", video: demoVideo },
      { title: "Stakeholder Interviews", video: demoVideo },
      { title: "Stakeholder Expectations & Needs", video: demoVideo },
    ],
  },
  {
    title: "Requirement Elicitation Techniques",
    lessons: [
      { title: "Workshops & Brainstorming", video: demoVideo },
      { title: "Surveys & Questionnaires", video: demoVideo },
      { title: "Observation & Document Analysis", video: demoVideo },
    ],
  },
  {
    title: "Requirement Documentation",
    lessons: [
      { title: "Creating Functional Requirements", video: demoVideo },
      { title: "Non-Functional Requirements", video: demoVideo },
      { title: "Use Cases & User Stories", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Gathering Requirements for a Real Project", video: demoVideo },
      { title: "Review & Presentation", video: demoVideo },
    ],
  },
]

   },
  { id: 28, category: "Business Analysis", title: "Process Optimization", instructor: "Khalid", duration: "8h 10m", lectures: 10, price: "$39.99", rating: 4.3, image: BS8,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Process Optimization", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Process Optimization", video: demoVideo },
    ],
  },
  {
    title: "Analyzing Processes",
    lessons: [
      { title: "Mapping Current Processes", video: demoVideo },
      { title: "Identifying Bottlenecks & Inefficiencies", video: demoVideo },
      { title: "Gathering Data & Metrics", video: demoVideo },
    ],
  },
  {
    title: "Optimization Techniques",
    lessons: [
      { title: "Lean Principles & Kaizen", video: demoVideo },
      { title: "Six Sigma Fundamentals", video: demoVideo },
      { title: "Automation & Technology Solutions", video: demoVideo },
    ],
  },
  {
    title: "Implementing Improvements",
    lessons: [
      { title: "Change Management Strategies", video: demoVideo },
      { title: "Monitoring & Measuring Results", video: demoVideo },
      { title: "Continuous Improvement Practices", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Optimizing a Real Process", video: demoVideo },
      { title: "Review & Presentation", video: demoVideo },
    ],
  },
]

   },

  // ================= Design & Creative (12) =================
  { id: 29, category: "Design & Creative", title: "UI/UX Design", instructor: "Waleed", duration: "6h 45m", lectures: 8, price: "$29.99", rating: 4.0, image: UIUX ,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to UI/UX Design", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of UI/UX in Products", video: demoVideo },
    ],
  },
  {
    title: "User Research",
    lessons: [
      { title: "Understanding Users & Personas", video: demoVideo },
      { title: "Conducting Interviews & Surveys", video: demoVideo },
      { title: "Analyzing User Feedback", video: demoVideo },
    ],
  },
  {
    title: "Design Fundamentals",
    lessons: [
      { title: "Color Theory & Typography", video: demoVideo },
      { title: "Layout & Visual Hierarchy", video: demoVideo },
      { title: "Wireframing & Prototyping", video: demoVideo },
    ],
  },
  {
    title: "Interaction & Usability",
    lessons: [
      { title: "Designing Interactive Elements", video: demoVideo },
      { title: "Usability Testing Techniques", video: demoVideo },
      { title: "Accessibility in UI/UX", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Designing a Complete UI/UX Project", video: demoVideo },
      { title: "Presentation & Feedback", video: demoVideo },
    ],
  },
]

  },
  { id: 30, category: "Design & Creative", title: "Graphic Design Basics", instructor: "Rashed", duration: "7h 20m", lectures: 9, price: "$34.99", rating: 4.1, image: UIUX2,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Graphic Design", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Graphic Design", video: demoVideo },
    ],
  },
  {
    title: "Design Principles",
    lessons: [
      { title: "Elements of Design", video: demoVideo },
      { title: "Principles of Composition", video: demoVideo },
      { title: "Color Theory & Typography", video: demoVideo },
    ],
  },
  {
    title: "Tools & Software",
    lessons: [
      { title: "Introduction to Photoshop", video: demoVideo },
      { title: "Introduction to Illustrator", video: demoVideo },
      { title: "Other Design Tools Overview", video: demoVideo },
    ],
  },
  {
    title: "Practical Design Projects",
    lessons: [
      { title: "Logo Design", video: demoVideo },
      { title: "Social Media Graphics", video: demoVideo },
      { title: "Print Design Basics", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Creating a Full Graphic Design Project", video: demoVideo },
      { title: "Presentation & Review", video: demoVideo },
    ],
  },
]

   },
  { id: 31, category: "Design & Creative", title: "Adobe Photoshop Mastery", instructor: "Ahmed", duration: "8h 10m", lectures: 10, price: "$39.99", rating: 4.2, image: UIUX3 ,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Adobe Photoshop", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Interface & Workspace Overview", video: demoVideo },
    ],
  },
  {
    title: "Basic Tools & Techniques",
    lessons: [
      { title: "Selection Tools", video: demoVideo },
      { title: "Crop, Resize & Transform", video: demoVideo },
      { title: "Layers & Layer Management", video: demoVideo },
    ],
  },
  {
    title: "Photo Editing Essentials",
    lessons: [
      { title: "Adjustments & Filters", video: demoVideo },
      { title: "Retouching Photos", video: demoVideo },
      { title: "Color Correction & Grading", video: demoVideo },
    ],
  },
  {
    title: "Advanced Photoshop Techniques",
    lessons: [
      { title: "Masks & Compositing", video: demoVideo },
      { title: "Typography & Text Effects", video: demoVideo },
      { title: "Smart Objects & Advanced Layer Effects", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Creating a Full Photoshop Project", video: demoVideo },
      { title: "Presentation & Review", video: demoVideo },
    ],
  },
]

  },
  { id: 32, category: "Design & Creative", title: "Figma for UI/UX", instructor: "Khalid", duration: "6h 50m", lectures: 8, price: "$29.99", rating: 4.0, image: UIUX4 ,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Figma", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Figma Interface & Workspace", video: demoVideo },
    ],
  },
  {
    title: "Basic Design Tools",
    lessons: [
      { title: "Shapes, Frames & Layouts", video: demoVideo },
      { title: "Text & Typography Basics", video: demoVideo },
      { title: "Colors, Gradients & Styles", video: demoVideo },
    ],
  },
  {
    title: "UI Components & Prototyping",
    lessons: [
      { title: "Buttons, Icons & Components", video: demoVideo },
      { title: "Design Systems & Libraries", video: demoVideo },
      { title: "Interactive Prototypes", video: demoVideo },
    ],
  },
  {
    title: "Advanced Techniques",
    lessons: [
      { title: "Auto Layout & Responsive Design", video: demoVideo },
      { title: "Plugins & Widgets", video: demoVideo },
      { title: "Collaboration & Feedback Tools", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Designing a Complete UI/UX Project", video: demoVideo },
      { title: "Presentation & Review", video: demoVideo },
    ],
  },
]

  },
  { id: 33, category: "Design & Creative", title: "Illustrator Essentials", instructor: "Waleed", duration: "7h 30m", lectures: 9, price: "$34.99", rating: 4.1, image: UIUX5,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Illustrator", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Illustrator Interface & Workspace", video: demoVideo },
    ],
  },
  {
    title: "Basic Tools & Shapes",
    lessons: [
      { title: "Selection Tools & Shortcuts", video: demoVideo },
      { title: "Shapes, Lines & Paths", video: demoVideo },
      { title: "Pen Tool & Curves", video: demoVideo },
    ],
  },
  {
    title: "Colors & Typography",
    lessons: [
      { title: "Fills, Strokes & Gradients", video: demoVideo },
      { title: "Working with Colors & Swatches", video: demoVideo },
      { title: "Typography & Text Tools", video: demoVideo },
    ],
  },
  {
    title: "Advanced Techniques",
    lessons: [
      { title: "Layers & Artboards Management", video: demoVideo },
      { title: "Masks, Effects & Blending Modes", video: demoVideo },
      { title: "Exporting & Preparing Files", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup", video: demoVideo },
      { title: "Designing a Complete Illustrator Project", video: demoVideo },
      { title: "Presentation & Review", video: demoVideo },
    ],
  },
]

   },
  { id: 34, category: "Design & Creative", title: "Web Design Projects", instructor: "Muaadh", duration: "8h 20m", lectures: 10, price: "$39.99", rating: 4.2, image: UIUX6 ,curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Web Design Projects", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Setting Up Your Design Environment", video: demoVideo },
    ],
  },
  {
    title: "Planning & Wireframing",
    lessons: [
      { title: "Understanding Project Requirements", video: demoVideo },
      { title: "Creating Wireframes & Mockups", video: demoVideo },
      { title: "Choosing Colors & Typography", video: demoVideo },
    ],
  },
  {
    title: "Designing Web Pages",
    lessons: [
      { title: "Homepage Design", video: demoVideo },
      { title: "About & Contact Pages", video: demoVideo },
      { title: "Portfolio & Gallery Pages", video: demoVideo },
    ],
  },
  {
    title: "Responsive Design",
    lessons: [
      { title: "Mobile & Tablet Layouts", video: demoVideo },
      { title: "Media Queries & Breakpoints", video: demoVideo },
      { title: "Testing & Previewing Designs", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup & Planning", video: demoVideo },
      { title: "Designing a Complete Website", video: demoVideo },
      { title: "Review & Presentation", video: demoVideo },
    ],
  },
]
},
  { id: 35, category: "Design & Creative", title: "Branding Basics", instructor: "Osama", duration: "6h 40m", lectures: 8, price: "$29.99", rating: 4.0, image: UIUX1111 , 
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Branding Basics", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Branding", video: demoVideo },
    ],
  },
  {
    title: "Brand Identity",
    lessons: [
      { title: "Logo Design & Visual Identity", video: demoVideo },
      { title: "Color Theory & Typography", video: demoVideo },
      { title: "Brand Guidelines & Consistency", video: demoVideo },
    ],
  },
  {
    title: "Brand Strategy",
    lessons: [
      { title: "Target Audience Analysis", video: demoVideo },
      { title: "Positioning & Messaging", video: demoVideo },
      { title: "Brand Voice & Storytelling", video: demoVideo },
    ],
  },
  {
    title: "Brand Application",
    lessons: [
      { title: "Digital Branding (Web & Social Media)", video: demoVideo },
      { title: "Print & Marketing Materials", video: demoVideo },
      { title: "Case Studies & Best Practices", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup & Planning", video: demoVideo },
      { title: "Creating a Complete Brand Package", video: demoVideo },
      { title: "Review & Presentation", video: demoVideo },
    ],
  },
]

   },
  { id: 36, category: "Design & Creative", title: "Creative Thinking", instructor: "Rashed", duration: "7h 10m", lectures: 9, price: "$34.99", rating: 4.1, image: UIUX8,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Creative Thinking", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Creativity in Problem Solving", video: demoVideo },
    ],
  },
  {
    title: "Foundations of Creativity",
    lessons: [
      { title: "Understanding Creative Mindset", video: demoVideo },
      { title: "Overcoming Mental Blocks", video: demoVideo },
      { title: "Techniques to Boost Creativity", video: demoVideo },
    ],
  },
  {
    title: "Creative Problem Solving",
    lessons: [
      { title: "Brainstorming Methods", video: demoVideo },
      { title: "Design Thinking Approach", video: demoVideo },
      { title: "Idea Evaluation & Selection", video: demoVideo },
    ],
  },
  {
    title: "Applied Creativity",
    lessons: [
      { title: "Innovation in Work & Projects", video: demoVideo },
      { title: "Collaborative Creativity", video: demoVideo },
      { title: "Case Studies & Examples", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Planning & Concept", video: demoVideo },
      { title: "Executing Creative Solutions", video: demoVideo },
      { title: "Presentation & Reflection", video: demoVideo },
    ],
  },
]

   },
  { id: 37, category: "Design & Creative", title: "Typography Mastery", instructor: "Ahmed", duration: "8h 15m", lectures: 10, price: "$39.99", rating: 4.2, image: UIUX9, 
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Typography Mastery", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Typography in Design", video: demoVideo },
    ],
  },
  {
    title: "Typography Basics",
    lessons: [
      { title: "Understanding Fonts & Typefaces", video: demoVideo },
      { title: "Font Classifications & Styles", video: demoVideo },
      { title: "Kerning, Tracking & Leading", video: demoVideo },
    ],
  },
  {
    title: "Advanced Typography",
    lessons: [
      { title: "Typography Hierarchy & Readability", video: demoVideo },
      { title: "Using Typography in Layouts", video: demoVideo },
      { title: "Creative Typography Techniques", video: demoVideo },
    ],
  },
  {
    title: "Digital & Print Typography",
    lessons: [
      { title: "Typography for Web Design", video: demoVideo },
      { title: "Typography for Print & Branding", video: demoVideo },
      { title: "Responsive Typography Tips", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Planning Your Typography Project", video: demoVideo },
      { title: "Executing & Applying Typography", video: demoVideo },
      { title: "Presentation & Feedback", video: demoVideo },
    ],
  },
]

   },
  { id: 38, category: "Design & Creative", title: "Design Systems", instructor: "Khalid", duration: "7h 50m", lectures: 9, price: "$34.99", rating: 4.1, image: UIUX10,

    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Design Systems", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Why Design Systems Matter", video: demoVideo },
    ],
  },
  {
    title: "Design Principles",
    lessons: [
      { title: "Consistency & Reusability", video: demoVideo },
      { title: "Design Tokens & Components", video: demoVideo },
      { title: "Typography, Colors & Spacing", video: demoVideo },
    ],
  },
  {
    title: "Building a Design System",
    lessons: [
      { title: "Creating Components & Patterns", video: demoVideo },
      { title: "Design Tokens Implementation", video: demoVideo },
      { title: "Versioning & Maintenance", video: demoVideo },
    ],
  },
  {
    title: "Collaboration & Documentation",
    lessons: [
      { title: "Collaborating with Developers", video: demoVideo },
      { title: "Documenting Components", video: demoVideo },
      { title: "Tools for Design Systems", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Planning Your Design System Project", video: demoVideo },
      { title: "Building Core Components", video: demoVideo },
      { title: "Showcasing & Presenting Your System", video: demoVideo },
    ],
  },
]

   },
  { id: 39, category: "Design & Creative", title: "Motion Graphics", instructor: "Waleed", duration: "6h 45m", lectures: 8, price: "$29.99", rating: 4.0, image: UIUX11,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Motion Graphics", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Understanding Motion Graphics", video: demoVideo },
    ],
  },
  {
    title: "Animation Basics",
    lessons: [
      { title: "Principles of Animation", video: demoVideo },
      { title: "Timing & Easing", video: demoVideo },
      { title: "Keyframes & Motion Paths", video: demoVideo },
    ],
  },
  {
    title: "Design & Tools",
    lessons: [
      { title: "Using After Effects for Motion Graphics", video: demoVideo },
      { title: "Working with Illustrator & Photoshop Assets", video: demoVideo },
      { title: "Typography & Icon Animation", video: demoVideo },
    ],
  },
  {
    title: "Advanced Techniques",
    lessons: [
      { title: "3D Elements & Camera Animation", video: demoVideo },
      { title: "Particle Effects & Visual FX", video: demoVideo },
      { title: "Looping & Exporting Animations", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Planning Your Motion Graphics Project", video: demoVideo },
      { title: "Animating Core Elements", video: demoVideo },
      { title: "Exporting & Presenting Your Animation", video: demoVideo },
    ],
  },
]

   },
  { id: 40, category: "Design & Creative", title: "Portfolio Projects", instructor: "Muaadh", duration: "7h 30m", lectures: 9, price: "$34.99", rating: 4.1, image: UIUX12,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Portfolio Projects", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of a Strong Portfolio", video: demoVideo },
    ],
  },
  {
    title: "Project Planning",
    lessons: [
      { title: "Selecting the Right Projects", video: demoVideo },
      { title: "Defining Project Goals & Scope", video: demoVideo },
      { title: "Wireframing & Sketching Ideas", video: demoVideo },
    ],
  },
  {
    title: "Design & Development",
    lessons: [
      { title: "Creating Visual Designs", video: demoVideo },
      { title: "Building Functional Prototypes", video: demoVideo },
      { title: "UI/UX Considerations", video: demoVideo },
    ],
  },
  {
    title: "Showcasing Your Work",
    lessons: [
      { title: "Organizing Projects for Portfolio", video: demoVideo },
      { title: "Writing Case Studies", video: demoVideo },
      { title: "Presenting Projects Effectively", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Completing Your Portfolio Project", video: demoVideo },
      { title: "Review & Feedback", video: demoVideo },
      { title: "Publishing Your Portfolio Online", video: demoVideo },
    ],
  },
]

   },

  // ================= Data Analysis (9) =================
  { id: 41, category: "Data Analysis", title: "Data Analytics with Python", instructor: "Khalid", duration: "9h 10m", lectures: 11, price: "$44.99", rating: 4.3, image: DS1 ,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Data Analytics with Python", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Why Python for Data Analytics?", video: demoVideo },
    ],
  },
  {
    title: "Python Basics for Data Analytics",
    lessons: [
      { title: "Variables, Data Types & Operators", video: demoVideo },
      { title: "Control Flow & Loops", video: demoVideo },
      { title: "Functions & Modules", video: demoVideo },
    ],
  },
  {
    title: "Working with Data",
    lessons: [
      { title: "Reading & Writing CSV/Excel Files", video: demoVideo },
      { title: "Introduction to Pandas", video: demoVideo },
      { title: "Data Cleaning & Preprocessing", video: demoVideo },
    ],
  },
  {
    title: "Data Analysis & Visualization",
    lessons: [
      { title: "Exploratory Data Analysis (EDA)", video: demoVideo },
      { title: "Data Visualization with Matplotlib & Seaborn", video: demoVideo },
      { title: "Summary Statistics & Insights", video: demoVideo },
    ],
  },
  {
    title: "Advanced Analytics",
    lessons: [
      { title: "Data Aggregation & Grouping", video: demoVideo },
      { title: "Time Series Analysis Basics", video: demoVideo },
      { title: "Introduction to Machine Learning with Python", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup & Dataset Exploration", video: demoVideo },
      { title: "Performing Analysis & Visualization", video: demoVideo },
      { title: "Documenting Insights & Presentation", video: demoVideo },
    ],
  },
]

  },
  { id: 42, category: "Data Analysis", title: "Excel for Data Analysis", instructor: "Ahmed", duration: "6h 20m", lectures: 9, price: "$29.99", rating: 4.1, image: DS2 ,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Excel for Data Analysis", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Why Excel for Data Analysis?", video: demoVideo },
    ],
  },
  {
    title: "Excel Basics",
    lessons: [
      { title: "Excel Interface & Navigation", video: demoVideo },
      { title: "Working with Cells, Rows & Columns", video: demoVideo },
      { title: "Basic Formulas & Functions", video: demoVideo },
    ],
  },
  {
    title: "Data Cleaning & Preparation",
    lessons: [
      { title: "Handling Missing Data", video: demoVideo },
      { title: "Text & Number Formatting", video: demoVideo },
      { title: "Sorting & Filtering Data", video: demoVideo },
    ],
  },
  {
    title: "Data Analysis Techniques",
    lessons: [
      { title: "Pivot Tables & Pivot Charts", video: demoVideo },
      { title: "Using Excel Functions for Analysis", video: demoVideo },
      { title: "Conditional Formatting & Data Validation", video: demoVideo },
    ],
  },
  {
    title: "Data Visualization",
    lessons: [
      { title: "Creating Charts & Graphs", video: demoVideo },
      { title: "Using Sparklines & Conditional Charts", video: demoVideo },
      { title: "Dashboard Basics in Excel", video: demoVideo },
    ],
  },
  {
    title: "Advanced Excel Techniques",
    lessons: [
      { title: "Introduction to Macros & VBA", video: demoVideo },
      { title: "Advanced Formulas & Functions", video: demoVideo },
      { title: "Automating Data Analysis", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup & Dataset Exploration", video: demoVideo },
      { title: "Performing Analysis & Visualization", video: demoVideo },
      { title: "Documenting Insights & Presentation", video: demoVideo },
    ],
  },
]

  },
  { id: 43, category: "Data Analysis", title: "SQL for Data Analytics", instructor: "Waleed", duration: "7h 45m", lectures: 10, price: "$34.99", rating: 4.2, image: DS3.BS1 ,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to SQL for Data Analytics", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Why SQL for Data Analytics?", video: demoVideo },
    ],
  },
  {
    title: "SQL Basics",
    lessons: [
      { title: "Introduction to Databases & Tables", video: demoVideo },
      { title: "Basic SELECT Statements", video: demoVideo },
      { title: "Filtering Data with WHERE", video: demoVideo },
    ],
  },
  {
    title: "Data Manipulation",
    lessons: [
      { title: "INSERT, UPDATE, DELETE Statements", video: demoVideo },
      { title: "Working with NULL Values", video: demoVideo },
      { title: "Using Functions in SQL", video: demoVideo },
    ],
  },
  {
    title: "Advanced Queries",
    lessons: [
      { title: "JOINs: INNER, LEFT, RIGHT, FULL", video: demoVideo },
      { title: "GROUP BY & Aggregation", video: demoVideo },
      { title: "HAVING Clause & Filtering Groups", video: demoVideo },
    ],
  },
  {
    title: "Data Analysis Techniques",
    lessons: [
      { title: "Subqueries & Nested Queries", video: demoVideo },
      { title: "Window Functions & Ranking", video: demoVideo },
      { title: "Common Table Expressions (CTEs)", video: demoVideo },
    ],
  },
  {
    title: "SQL Performance & Optimization",
    lessons: [
      { title: "Indexes & Query Performance", video: demoVideo },
      { title: "Optimizing Complex Queries", video: demoVideo },
      { title: "Best Practices for Analytics Queries", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup & Dataset Selection", video: demoVideo },
      { title: "Data Extraction & Analysis", video: demoVideo },
      { title: "Reporting Insights & Presentation", video: demoVideo },
    ],
  },
]

  },
  { id: 44, category: "Data Analysis", title: "Data Visualization", instructor: "Rashed", duration: "8h 10m", lectures: 10, price: "$39.99", rating: 4.3, image: DS4 ,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Data Visualization", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Data Visualization", video: demoVideo },
    ],
  },
  {
    title: "Data Visualization Basics",
    lessons: [
      { title: "Types of Visualizations", video: demoVideo },
      { title: "Understanding Data Charts & Graphs", video: demoVideo },
      { title: "Choosing the Right Visualization", video: demoVideo },
    ],
  },
  {
    title: "Visualization Tools",
    lessons: [
      { title: "Using Excel for Visualizations", video: demoVideo },
      { title: "Using Power BI for Visualizations", video: demoVideo },
      { title: "Introduction to Tableau", video: demoVideo },
    ],
  },
  {
    title: "Design Principles",
    lessons: [
      { title: "Color Theory & Visualization", video: demoVideo },
      { title: "Designing Dashboards", video: demoVideo },
      { title: "Interactive Visualizations", video: demoVideo },
    ],
  },
  {
    title: "Advanced Techniques",
    lessons: [
      { title: "Data Aggregation & Grouping", video: demoVideo },
      { title: "Custom Charts & Graphs", video: demoVideo },
      { title: "Storytelling with Data", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup & Dataset Selection", video: demoVideo },
      { title: "Creating Visualizations", video: demoVideo },
      { title: "Sharing Insights & Presentation", video: demoVideo },
    ],
  },
]

  },
  { id: 45, category: "Data Analysis", title: "Power BI Essentials", instructor: "Muaadh", duration: "7h 50m", lectures: 9, price: "$34.99", rating: 4.1, image: DS5,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Power BI", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Power BI in Data Analytics", video: demoVideo },
    ],
  },
  {
    title: "Getting Started",
    lessons: [
      { title: "Installing Power BI Desktop", video: demoVideo },
      { title: "Power BI Interface Overview", video: demoVideo },
      { title: "Connecting to Data Sources", video: demoVideo },
    ],
  },
  {
    title: "Data Modeling",
    lessons: [
      { title: "Transforming Data with Power Query", video: demoVideo },
      { title: "Creating Relationships Between Tables", video: demoVideo },
      { title: "Introduction to DAX Basics", video: demoVideo },
    ],
  },
  {
    title: "Visualizations",
    lessons: [
      { title: "Creating Charts & Graphs", video: demoVideo },
      { title: "Using Slicers and Filters", video: demoVideo },
      { title: "Custom Visuals in Power BI", video: demoVideo },
    ],
  },
  {
    title: "Dashboards & Reports",
    lessons: [
      { title: "Designing Interactive Dashboards", video: demoVideo },
      { title: "Publishing & Sharing Reports", video: demoVideo },
      { title: "Best Practices for Report Design", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup & Dataset Selection", video: demoVideo },
      { title: "Building a Complete Power BI Report", video: demoVideo },
      { title: "Presenting Insights", video: demoVideo },
    ],
  },
]

   },
  { id: 46, category: "Data Analysis", title: "Python Pandas", instructor: "Osama", duration: "8h 30m", lectures: 10, price: "$39.99", rating: 4.2, image: DS6,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Python Pandas", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Pandas in Data Analysis", video: demoVideo },
    ],
  },
  {
    title: "Getting Started with Pandas",
    lessons: [
      { title: "Installing Pandas & Setup", video: demoVideo },
      { title: "Understanding Series and DataFrames", video: demoVideo },
      { title: "Reading & Writing Data (CSV, Excel)", video: demoVideo },
    ],
  },
  {
    title: "Data Manipulation",
    lessons: [
      { title: "Selecting, Filtering, and Slicing Data", video: demoVideo },
      { title: "Adding, Modifying, and Deleting Columns", video: demoVideo },
      { title: "Handling Missing Data", video: demoVideo },
    ],
  },
  {
    title: "Data Analysis & Aggregation",
    lessons: [
      { title: "Grouping & Aggregating Data", video: demoVideo },
      { title: "Sorting & Ranking Data", video: demoVideo },
      { title: "Working with Dates & Time Series", video: demoVideo },
    ],
  },
  {
    title: "Advanced Pandas",
    lessons: [
      { title: "Merging, Joining & Concatenating DataFrames", video: demoVideo },
      { title: "Pivot Tables & Crosstabs", video: demoVideo },
      { title: "Optimizing Performance", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup & Dataset Selection", video: demoVideo },
      { title: "Performing Full Data Analysis", video: demoVideo },
      { title: "Visualizing & Presenting Insights", video: demoVideo },
    ],
  },
]

   },
  { id: 47, category: "Data Analysis", title: "Statistics for Data", instructor: "Ahmed", duration: "6h 40m", lectures: 8, price: "$29.99", rating: 4.0, image: DS7 ,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Statistics for Data", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Statistics in Data Analysis", video: demoVideo },
    ],
  },
  {
    title: "Descriptive Statistics",
    lessons: [
      { title: "Measures of Central Tendency (Mean, Median, Mode)", video: demoVideo },
      { title: "Measures of Dispersion (Variance, Standard Deviation, Range)", video: demoVideo },
      { title: "Data Distribution & Visualization", video: demoVideo },
    ],
  },
  {
    title: "Probability Basics",
    lessons: [
      { title: "Introduction to Probability", video: demoVideo },
      { title: "Conditional Probability & Bayes’ Theorem", video: demoVideo },
      { title: "Probability Distributions (Normal, Binomial, Poisson)", video: demoVideo },
    ],
  },
  {
    title: "Inferential Statistics",
    lessons: [
      { title: "Sampling Techniques & Sample Size", video: demoVideo },
      { title: "Confidence Intervals", video: demoVideo },
      { title: "Hypothesis Testing (t-test, chi-square)", video: demoVideo },
    ],
  },
  {
    title: "Correlation & Regression",
    lessons: [
      { title: "Correlation Analysis", video: demoVideo },
      { title: "Simple Linear Regression", video: demoVideo },
      { title: "Multiple Regression Basics", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup & Dataset Selection", video: demoVideo },
      { title: "Performing Statistical Analysis", video: demoVideo },
      { title: "Presenting Insights & Findings", video: demoVideo },
    ],
  },
]

  },
  { id: 48, category: "Data Analysis", title: "Advanced SQL Queries", instructor: "Khalid", duration: "7h 20m", lectures: 9, price: "$34.99", rating: 4.1, image: DS8 },
  { id: 49, category: "Data Analysis", title: "Machine Learning for Data", instructor: "Waleed", duration: "9h 00m", lectures: 11, price: "$44.99", rating: 4.3, image: ML1,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Advanced SQL Queries", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Why Advanced SQL is Important", video: demoVideo },
    ],
  },
  {
    title: "Complex SELECT Statements",
    lessons: [
      { title: "Subqueries & Nested Queries", video: demoVideo },
      { title: "Using CASE Statements", video: demoVideo },
      { title: "Window Functions Overview", video: demoVideo },
    ],
  },
  {
    title: "Joins and Set Operations",
    lessons: [
      { title: "Advanced JOIN Techniques", video: demoVideo },
      { title: "Self-Joins & Cross Joins", video: demoVideo },
      { title: "UNION, INTERSECT, EXCEPT", video: demoVideo },
    ],
  },
  {
    title: "Aggregations & Grouping",
    lessons: [
      { title: "GROUP BY with HAVING Clause", video: demoVideo },
      { title: "Aggregate Functions in Depth", video: demoVideo },
      { title: "ROLLUP & CUBE for Multi-Level Aggregation", video: demoVideo },
    ],
  },
  {
    title: "Performance & Optimization",
    lessons: [
      { title: "Using Indexes Effectively", video: demoVideo },
      { title: "Query Optimization Techniques", video: demoVideo },
      { title: "EXPLAIN Plans & Debugging Queries", video: demoVideo },
    ],
  },
  {
    title: "Advanced Data Manipulation",
    lessons: [
      { title: "CTEs (Common Table Expressions)", video: demoVideo },
      { title: "Recursive Queries", video: demoVideo },
      { title: "Transactions & Error Handling", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup & Database Design", video: demoVideo },
      { title: "Writing Complex Queries", video: demoVideo },
      { title: "Performance Tuning & Reporting", video: demoVideo },
    ],
  },
]

   },

  // ================= Marketing & Sales (11) =================
  { id: 50, category: "Marketing & Sales", title: "Digital Marketing Basics", instructor: "Muaadh", duration: "7h 50m", lectures: 9, price: "$34.99", rating: 4.1, image: MS1,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Digital Marketing", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Digital Marketing", video: demoVideo },
    ],
  },
  {
    title: "Marketing Fundamentals",
    lessons: [
      { title: "Understanding Your Audience", video: demoVideo },
      { title: "Marketing Funnel Explained", video: demoVideo },
      { title: "Setting Marketing Goals", video: demoVideo },
    ],
  },
  {
    title: "Content Marketing",
    lessons: [
      { title: "Creating Engaging Content", video: demoVideo },
      { title: "Content Strategy & Planning", video: demoVideo },
      { title: "SEO Basics for Content", video: demoVideo },
    ],
  },
  {
    title: "Social Media Marketing",
    lessons: [
      { title: "Facebook, Instagram & LinkedIn Strategies", video: demoVideo },
      { title: "Social Media Ads Overview", video: demoVideo },
      { title: "Measuring Social Media ROI", video: demoVideo },
    ],
  },
  {
    title: "Email & Campaign Marketing",
    lessons: [
      { title: "Building an Email List", video: demoVideo },
      { title: "Creating Effective Campaigns", video: demoVideo },
      { title: "Tracking & Analytics", video: demoVideo },
    ],
  },
  {
    title: "Paid Advertising Basics",
    lessons: [
      { title: "Google Ads Overview", video: demoVideo },
      { title: "Introduction to PPC", video: demoVideo },
      { title: "Measuring Ad Performance", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Project Setup & Goal Definition", video: demoVideo },
      { title: "Launching a Campaign", video: demoVideo },
      { title: "Performance Analysis & Reporting", video: demoVideo },
    ],
  },
]

   },
  { id: 51, category: "Marketing & Sales", title: "SEO Fundamentals", instructor: "Osama", duration: "6h 40m", lectures: 8, price: "$29.99", rating: 4.0, image: MS2 ,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to SEO Fundamentals", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Why SEO Matters", video: demoVideo },
    ],
  },
  {
    title: "SEO Basics",
    lessons: [
      { title: "Understanding Search Engines", video: demoVideo },
      { title: "How SEO Works", video: demoVideo },
      { title: "On-Page vs Off-Page SEO", video: demoVideo },
    ],
  },
  {
    title: "Keyword Research",
    lessons: [
      { title: "Finding the Right Keywords", video: demoVideo },
      { title: "Analyzing Keyword Competition", video: demoVideo },
      { title: "Using Keywords Effectively", video: demoVideo },
    ],
  },
  {
    title: "On-Page SEO",
    lessons: [
      { title: "Optimizing Titles & Meta Descriptions", video: demoVideo },
      { title: "Header Tags & Content Structure", video: demoVideo },
      { title: "Internal Linking & URL Structure", video: demoVideo },
    ],
  },
  {
    title: "Technical SEO",
    lessons: [
      { title: "Site Speed & Performance", video: demoVideo },
      { title: "Mobile-Friendly Optimization", video: demoVideo },
      { title: "Sitemap & Robots.txt", video: demoVideo },
    ],
  },
  {
    title: "Off-Page SEO",
    lessons: [
      { title: "Link Building Strategies", video: demoVideo },
      { title: "Social Signals & Branding", video: demoVideo },
      { title: "Monitoring Backlinks", video: demoVideo },
    ],
  },
  {
    title: "SEO Tools & Analytics",
    lessons: [
      { title: "Google Search Console", video: demoVideo },
      { title: "Using Google Analytics", video: demoVideo },
      { title: "SEO Reporting & Insights", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "SEO Audit of a Website", video: demoVideo },
      { title: "Optimizing Pages for Keywords", video: demoVideo },
      { title: "Tracking SEO Performance", video: demoVideo },
    ],
  },
]

  },
  { id: 52, category: "Marketing & Sales", title: "Social Media Marketing", instructor: "Ahmed", duration: "7h 30m", lectures: 9, price: "$34.99", rating: 4.1, image: MS3 },
  { id: 53, category: "Marketing & Sales", title: "Email Marketing", instructor: "Khalid", duration: "6h 50m", lectures: 8, price: "$29.99", rating: 4.0, image: MS4 ,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Social Media Marketing", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Social Media in Business", video: demoVideo },
    ],
  },
  {
    title: "Social Media Platforms",
    lessons: [
      { title: "Facebook Marketing Basics", video: demoVideo },
      { title: "Instagram Marketing Basics", video: demoVideo },
      { title: "LinkedIn Marketing Basics", video: demoVideo },
      { title: "Twitter & TikTok Overview", video: demoVideo },
    ],
  },
  {
    title: "Content Strategy",
    lessons: [
      { title: "Creating Engaging Content", video: demoVideo },
      { title: "Content Calendar & Scheduling", video: demoVideo },
      { title: "Visuals & Branding", video: demoVideo },
    ],
  },
  {
    title: "Community Management",
    lessons: [
      { title: "Engaging Your Audience", video: demoVideo },
      { title: "Handling Feedback & Comments", video: demoVideo },
      { title: "Building a Loyal Community", video: demoVideo },
    ],
  },
  {
    title: "Advertising & Campaigns",
    lessons: [
      { title: "Facebook & Instagram Ads", video: demoVideo },
      { title: "LinkedIn & Twitter Ads", video: demoVideo },
      { title: "Measuring ROI of Campaigns", video: demoVideo },
    ],
  },
  {
    title: "Analytics & Reporting",
    lessons: [
      { title: "Social Media Metrics & KPIs", video: demoVideo },
      { title: "Using Insights & Analytics Tools", video: demoVideo },
      { title: "Optimizing Your Strategy", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Planning a Social Media Campaign", video: demoVideo },
      { title: "Executing & Scheduling Posts", video: demoVideo },
      { title: "Analyzing Campaign Results", video: demoVideo },
    ],
  },
]

  },
  { id: 54, category: "Marketing & Sales", title: "Content Marketing", instructor: "Waleed", duration: "7h 20m", lectures: 9, price: "$34.99", rating: 4.1, image: MS5 },
  { id: 55, category: "Marketing & Sales", title: "Google Ads", instructor: "Rashed", duration: "6h 45m", lectures: 8, price: "$29.99", rating: 4.0, image: MS6,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Content Marketing", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Content Marketing", video: demoVideo },
    ],
  },
  {
    title: "Content Strategy",
    lessons: [
      { title: "Defining Your Audience", video: demoVideo },
      { title: "Setting Goals & KPIs", video: demoVideo },
      { title: "Creating a Content Plan", video: demoVideo },
    ],
  },
  {
    title: "Content Creation",
    lessons: [
      { title: "Writing Blog Posts & Articles", video: demoVideo },
      { title: "Visual Content & Graphics", video: demoVideo },
      { title: "Video Content Basics", video: demoVideo },
    ],
  },
  {
    title: "Content Distribution",
    lessons: [
      { title: "Sharing on Social Media", video: demoVideo },
      { title: "Email Marketing & Newsletters", video: demoVideo },
      { title: "Collaborations & Guest Posting", video: demoVideo },
    ],
  },
  {
    title: "SEO & Optimization",
    lessons: [
      { title: "SEO Basics for Content", video: demoVideo },
      { title: "Keyword Research & Optimization", video: demoVideo },
      { title: "Improving Engagement & Reach", video: demoVideo },
    ],
  },
  {
    title: "Analytics & Reporting",
    lessons: [
      { title: "Tracking Performance Metrics", video: demoVideo },
      { title: "Analyzing Audience Behavior", video: demoVideo },
      { title: "Refining Your Content Strategy", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Planning a Content Campaign", video: demoVideo },
      { title: "Creating & Publishing Content", video: demoVideo },
      { title: "Measuring Results & Improvements", video: demoVideo },
    ],
  },
]

   },
  { id: 56, category: "Marketing & Sales", title: "Facebook Ads", instructor: "Muaadh", duration: "7h 10m", lectures: 9, price: "$34.99", rating: 4.1, image: MS7,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Facebook Ads", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Why Facebook Ads Matter", video: demoVideo },
    ],
  },
  {
    title: "Getting Started",
    lessons: [
      { title: "Setting Up Facebook Business Manager", video: demoVideo },
      { title: "Creating Ad Accounts", video: demoVideo },
      { title: "Navigating Ads Manager", video: demoVideo },
    ],
  },
  {
    title: "Ad Campaign Fundamentals",
    lessons: [
      { title: "Campaign Objectives", video: demoVideo },
      { title: "Audience Targeting", video: demoVideo },
      { title: "Budgeting & Bidding", video: demoVideo },
    ],
  },
  {
    title: "Ad Creation",
    lessons: [
      { title: "Designing Engaging Ads", video: demoVideo },
      { title: "Writing Ad Copy", video: demoVideo },
      { title: "Using Video & Carousel Ads", video: demoVideo },
    ],
  },
  {
    title: "Optimization & Testing",
    lessons: [
      { title: "A/B Testing Ads", video: demoVideo },
      { title: "Optimizing for Conversions", video: demoVideo },
      { title: "Analyzing Ad Performance", video: demoVideo },
    ],
  },
  {
    title: "Advanced Strategies",
    lessons: [
      { title: "Retargeting Campaigns", video: demoVideo },
      { title: "Lookalike Audiences", video: demoVideo },
      { title: "Scaling Your Campaigns", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Planning a Facebook Ad Campaign", video: demoVideo },
      { title: "Creating & Launching Ads", video: demoVideo },
      { title: "Analyzing Campaign Results", video: demoVideo },
    ],
  },
]

   },
  { id: 57, category: "Marketing & Sales", title: "Influencer Marketing", instructor: "Osama", duration: "6h 40m", lectures: 8, price: "$29.99", rating: 4.0, image: MS8,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Influencer Marketing", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Influencer Marketing", video: demoVideo },
    ],
  },
  {
    title: "Understanding Influencers",
    lessons: [
      { title: "Types of Influencers", video: demoVideo },
      { title: "Finding the Right Influencers", video: demoVideo },
      { title: "Analyzing Influencer Reach & Engagement", video: demoVideo },
    ],
  },
  {
    title: "Campaign Planning",
    lessons: [
      { title: "Setting Goals & KPIs", video: demoVideo },
      { title: "Budgeting for Campaigns", video: demoVideo },
      { title: "Planning Content & Messaging", video: demoVideo },
    ],
  },
  {
    title: "Executing Campaigns",
    lessons: [
      { title: "Collaborating with Influencers", video: demoVideo },
      { title: "Managing Deliverables & Timelines", video: demoVideo },
      { title: "Content Approval & Branding Guidelines", video: demoVideo },
    ],
  },
  {
    title: "Measurement & Optimization",
    lessons: [
      { title: "Tracking Campaign Performance", video: demoVideo },
      { title: "Measuring ROI", video: demoVideo },
      { title: "Optimizing Future Campaigns", video: demoVideo },
    ],
  },
  {
    title: "Advanced Strategies",
    lessons: [
      { title: "Long-Term Influencer Partnerships", video: demoVideo },
      { title: "Leveraging Micro & Nano Influencers", video: demoVideo },
      { title: "Cross-Platform Campaigns", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Planning an Influencer Marketing Campaign", video: demoVideo },
      { title: "Executing the Campaign", video: demoVideo },
      { title: "Reporting & Presentation", video: demoVideo },
    ],
  },
]

   },
  { id: 58, category: "Marketing & Sales", title: "Marketing Analytics", instructor: "Ahmed", duration: "7h 00m", lectures: 9, price: "$34.99", rating: 4.1, image: MS9,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Influencer Marketing", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Influencer Marketing", video: demoVideo },
    ],
  },
  {
    title: "Understanding Influencers",
    lessons: [
      { title: "Types of Influencers", video: demoVideo },
      { title: "Finding the Right Influencers", video: demoVideo },
      { title: "Analyzing Influencer Reach & Engagement", video: demoVideo },
    ],
  },
  {
    title: "Campaign Planning",
    lessons: [
      { title: "Setting Goals & KPIs", video: demoVideo },
      { title: "Budgeting for Campaigns", video: demoVideo },
      { title: "Planning Content & Messaging", video: demoVideo },
    ],
  },
  {
    title: "Executing Campaigns",
    lessons: [
      { title: "Collaborating with Influencers", video: demoVideo },
      { title: "Managing Deliverables & Timelines", video: demoVideo },
      { title: "Content Approval & Branding Guidelines", video: demoVideo },
    ],
  },
  {
    title: "Measurement & Optimization",
    lessons: [
      { title: "Tracking Campaign Performance", video: demoVideo },
      { title: "Measuring ROI", video: demoVideo },
      { title: "Optimizing Future Campaigns", video: demoVideo },
    ],
  },
  {
    title: "Advanced Strategies",
    lessons: [
      { title: "Long-Term Influencer Partnerships", video: demoVideo },
      { title: "Leveraging Micro & Nano Influencers", video: demoVideo },
      { title: "Cross-Platform Campaigns", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Planning an Influencer Marketing Campaign", video: demoVideo },
      { title: "Executing the Campaign", video: demoVideo },
      { title: "Reporting & Presentation", video: demoVideo },
    ],
  },
]

   },
  { id: 59, category: "Marketing & Sales", title: "Brand Strategy", instructor: "Khalid", duration: "6h 55m", lectures: 8, price: "$29.99", rating: 4.0, image: MS10 ,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Brand Strategy", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Brand Strategy", video: demoVideo },
    ],
  },
  {
    title: "Understanding Branding",
    lessons: [
      { title: "What is a Brand?", video: demoVideo },
      { title: "Brand Identity vs. Brand Image", video: demoVideo },
      { title: "Brand Values and Mission", video: demoVideo },
    ],
  },
  {
    title: "Brand Research & Analysis",
    lessons: [
      { title: "Market Analysis & Competitor Research", video: demoVideo },
      { title: "Target Audience Identification", video: demoVideo },
      { title: "SWOT Analysis for Branding", video: demoVideo },
    ],
  },
  {
    title: "Brand Positioning",
    lessons: [
      { title: "Creating a Unique Value Proposition", video: demoVideo },
      { title: "Positioning Statements & Messaging", video: demoVideo },
      { title: "Differentiating Your Brand", video: demoVideo },
    ],
  },
  {
    title: "Brand Communication",
    lessons: [
      { title: "Visual & Verbal Brand Identity", video: demoVideo },
      { title: "Brand Storytelling", video: demoVideo },
      { title: "Consistency Across Channels", video: demoVideo },
    ],
  },
  {
    title: "Brand Growth & Management",
    lessons: [
      { title: "Brand Monitoring & Feedback", video: demoVideo },
      { title: "Rebranding & Brand Evolution", video: demoVideo },
      { title: "Measuring Brand Equity", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Developing a Complete Brand Strategy", video: demoVideo },
      { title: "Presenting the Brand Plan", video: demoVideo },
      { title: "Implementation Roadmap", video: demoVideo },
    ],
  },
]

  },
  { id: 60, category: "Marketing & Sales", title: "Sales Techniques", instructor: "Waleed", duration: "7h 20m", lectures: 9, price: "$34.99", rating: 4.1, image: MS11,
    curriculum: [
  {
    title: "Introduction",
    lessons: [
      { title: "Welcome to Sales Techniques", video: demoVideo },
      { title: "Course Overview", video: demoVideo },
      { title: "Importance of Effective Selling", video: demoVideo },
    ],
  },
  {
    title: "Understanding the Sales Process",
    lessons: [
      { title: "Stages of the Sales Funnel", video: demoVideo },
      { title: "Customer Buying Behavior", video: demoVideo },
      { title: "Prospecting & Lead Generation", video: demoVideo },
    ],
  },
  {
    title: "Communication Skills",
    lessons: [
      { title: "Active Listening & Questioning", video: demoVideo },
      { title: "Building Rapport & Trust", video: demoVideo },
      { title: "Handling Objections", video: demoVideo },
    ],
  },
  {
    title: "Sales Strategies",
    lessons: [
      { title: "Consultative Selling", video: demoVideo },
      { title: "Solution Selling", video: demoVideo },
      { title: "Negotiation Techniques", video: demoVideo },
    ],
  },
  {
    title: "Closing the Deal",
    lessons: [
      { title: "Effective Closing Techniques", video: demoVideo },
      { title: "Follow-ups & Relationship Building", video: demoVideo },
      { title: "Measuring Sales Performance", video: demoVideo },
    ],
  },
  {
    title: "Sales Tools & Technology",
    lessons: [
      { title: "CRM Tools Overview", video: demoVideo },
      { title: "Sales Automation Techniques", video: demoVideo },
      { title: "Analyzing Sales Data", video: demoVideo },
    ],
  },
  {
    title: "Final Project",
    lessons: [
      { title: "Developing a Sales Strategy Plan", video: demoVideo },
      { title: "Role-playing Sales Scenarios", video: demoVideo },
      { title: "Presenting Your Sales Plan", video: demoVideo },
    ],
  },
],}
,
];

