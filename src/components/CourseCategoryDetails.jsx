import { useParams, Link } from "react-router-dom";
import { BiTime, BiBook, BiHome } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import instructorImg from "../assets/men1.jpg";
import { coursesData } from "./coursesData";
import "./CourseCategoryDetails.css";

const CourseCategoryDetails = () => {
const { categoryName } = useParams();

// Convert URL back to readable format
const formattedCategory = categoryName
  .split("-")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

// Filter courses by category
const filteredCourses = coursesData.filter(
  course => course.category.toLowerCase() === formattedCategory.toLowerCase()
);


  return (
    <div className="categoryDetailsPage">
      {/* HEADER */}
      <div className="categoryHeader">
        <Link to="/categories" className="homeLink">
          <BiHome className="homeIcon" />
          Back to Categories
        </Link>

        <h2>{categoryName}</h2>
        <p>{filteredCourses.length} Courses</p>
      </div>

      {/* COURSES GRID */}
      <div className="coursesGrid">
        {filteredCourses.map((course) => (
          <Link
            to={`/course/${course.id}`}
            className="courseCard"
            key={course.id}
          >
            <img
              src={course.image}
              alt={course.title}
              className="courseImg"
            />

            <div className="courseContent">
              <div className="instructor">
                <img src={instructorImg} alt="Instructor" />
                <span>{course.instructor}</span>
              </div>

              <h5 className="titleCourse">{course.title}</h5>

              <div className="courseInfo">
                <div className="infoItem">
                  <BiTime />
                  <span>{course.duration}</span>
                </div>
                <div className="infoItem">
                  <BiBook />
                  <span>{course.lectures} Lectures</span>
                </div>
              </div>

              <div className="pricingReview">
                <span className="price">{course.price}</span>
                <div className="review">
                  <AiFillStar />
                  <span>{course.rating}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseCategoryDetails;
