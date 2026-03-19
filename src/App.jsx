import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import AdminPanel from "../src/Admin/AdminPanel"; // new import


import CourseCategoryDetails from "./components/CourseCategoryDetails";
import ScrollToTop from "./components/ScrollToTop";
import CoursePageDetails from "./components/CoursePageDetails";
import HRPanel from "../hr/HR.jsx"; // new import
import Login from "./students/Login.jsx"; // new import
const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
      
  <Route path="/hr" element={<HRPanel />} />
  <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CourseCategoryDetails />} />
        <Route path="/course/:id" element={<CoursePageDetails />} />
              <Route path="/admin" element={<AdminPanel />} /> {/* new admin route */}

      </Routes>
    </Router>
  );
};

export default App;
