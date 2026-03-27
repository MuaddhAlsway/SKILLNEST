import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CourseCategoryDetails from "./components/CourseCategoryDetails";
import ScrollToTop from "./components/ScrollToTop";
import CoursePageDetails from "./components/CoursePageDetails";
import About from "./pages/About.jsx";
import Contactus from "./pages/Contactus.jsx"

const App = () => {
  return (
    <Router basename="/SKILLNEST">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CourseCategoryDetails />} />
        <Route path="/course/:id" element={<CoursePageDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </Router>
  );
};

export default App;
