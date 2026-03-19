import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import CardCourse from "../components/CardCourse";
import CategoriesPlus from "../components/CategoriesPlus";
import Email from "../components/Email";
import Effer from "../components/Effer";

const Categories = () => {
  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <Navbar />
      <Header />
      <CategoriesPlus />
      <Filter 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      <CardCourse selectedCategory={selectedCategory} />
      <Effer/>    
    </div>
  );
};

export default Categories;
