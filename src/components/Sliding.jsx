import {
  BiCodeAlt,
  BiBrain,
  BiBriefcase,
  BiPaint,
  BiData,
  BiTrendingUp
} from "react-icons/bi";

const categories = [
  {
    icon: BiCodeAlt,
    title: "Programming",
    courses: "10 Courses",
    description: "Master Full Stack in short time"
  },
  {
    icon: BiBrain,
    title: "AI",
    courses: "10 Courses",
    description: "Master AI in short time"
  },
  {
    icon: BiBriefcase,
    title: "Business Analysis",
    courses: "8 Courses",
    description: "Build strong business skills"
  },
  {
    icon: BiPaint,
    title: "Design & Creative",
    courses: "12 Courses",
    description: "Design modern UI & UX"
  },
  {
    icon: BiData,
    title: "Data Analysis",
    courses: "9 Courses",
    description: "Analyze real-world data"
  },
  {
    icon: BiTrendingUp,
    title: "Marketing & Sales",
    courses: "11 Courses",
    description: "Grow brands & revenue"
  }
];

import './Sliding.css';

const Sliding = () => {
  return (
    <div className="slidingSection">
      <div className="title">
        <h4>Popular Categories</h4>
        <p>10+ Categories</p>
      </div>

      <div className="slider">
        <div className="containerCard">
          
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="cardItem" key={index}>
                <Icon className="icon" />
                <span className="catTitle">{item.title}</span>
                <span className="courses">{item.courses}</span>
                <p>{item.description}</p>
              </div>
            );
          })}

          {/* Duplicate for infinite scroll */}
          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="cardItem" key={`dup-${index}`}>
                <Icon className="icon" />
                <span className="catTitle">{item.title}</span>
                <span className="courses">{item.courses}</span>
                <p>{item.description}</p>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default Sliding;
