import {
  BiCodeAlt,
  BiBrain,
  BiBriefcase,
  BiPaint,
  BiData,
  BiTrendingUp,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import "./CategoriesPlus.css";

const categories = [
  { icon: BiCodeAlt, title: "Programming", courses: "10 Courses", description: "Master Full Stack in short time" },
  { icon: BiBrain, title: "AI", courses: "10 Courses", description: "Master AI in short time" },
  { icon: BiBriefcase, title: "Business Analysis", courses: "8 Courses", description: "Build strong business skills" },
  { icon: BiPaint, title: "Design & Creative", courses: "12 Courses", description: "Design modern UI & UX" },
  { icon: BiData, title: "Data Analysis", courses: "9 Courses", description: "Analyze real-world data" },
  { icon: BiTrendingUp, title: "Marketing & Sales", courses: "11 Courses", description: "Grow brands & revenue" },
];

const CategoriesPlus = () => {
  return (
    <div className="categoriesPlusSection">
      <div className="titlePlus">
        <h4>Popular Categories</h4>
        <p>10+ Categories</p>
      </div>

      <div className="containerCategories">
        {categories.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link to={`/category/${item.title}`} className="cardCategories" key={index}>
              <Icon className="icon" />
              <span className="catTitle">{item.title}</span>
              <span className="courses">{item.courses}</span>
              <p>{item.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesPlus;
