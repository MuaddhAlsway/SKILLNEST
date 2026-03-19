import './CardCourse.css';
import { BiTime, BiBook } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import instructorImg from '../assets/men1.jpg';
import ReactCourse from '../assets/ReactCourse.png';
import MachineLearning from '../assets/MachineLearning.png';
import BusinessAnalysis from '../assets/BusinessAnalysis.webp';
import FrontEnd from '../assets/FrontEnd.webp';
import DigitalMarketing from '../assets/DigitalMarketing.jpg';
import DataAnylsis from '../assets/Dataanylsis.png';
import CyperSecrity from '../assets/CyperSecrity.jpg';
import UIUX1 from '../assets/UIUX.webp';

const courses = [
  { name:'Ahmed', title: "React for Beginners", category: "Programming", duration: "10h 30m", lectures: 12, price: "$49.99", rating: 4.5 ,courseImg: ReactCourse },
  { name:'Khalid', title: "AI & Machine Learning", category: "AI", duration: "8h 20m", lectures: 10, price: "$39.99", rating: 4.2,courseImg: MachineLearning },
  { name:'Abdulaah', title: "Business Analysis", category: "Business Analysis", duration: "12h 15m", lectures: 15, price: "$59.99", rating: 4.7,courseImg: BusinessAnalysis },
  { name:'Waleed', title: "UI/UX Design", category: "Design & Creative", duration: "6h 45m", lectures: 8, price: "$29.99", rating: 4.0,courseImg: UIUX1 },
  { name:'Khalid', title: "Data Analytics", category: "Data Analysis", duration: "9h 10m", lectures: 11, price: "$44.99", rating: 4.3,courseImg: DataAnylsis },
  { name:'Muaadh', title: "Digital Marketing", category: "Marketing & Sales", duration: "7h 50m", lectures: 9, price: "$34.99", rating: 4.1,courseImg: DigitalMarketing },
  {name:'Osama', title: "CyperSecrity", category: "Marketing & Sales", duration: "11h 00m", lectures: 14, price: "$54.99", rating: 4.6 ,courseImg: CyperSecrity},
  { name:'Rashed', title: "Frontend Mastery", category: "Programming", duration: "5h 30m", lectures: 7, price: "$24.99", rating: 3.9,courseImg: FrontEnd }
];

const CardCourse = ({ selectedCategory }) => {
  // filter courses by category
  const filteredCourses = selectedCategory
    ? courses.filter(course => course.category === selectedCategory)
    : courses;

  return (
    <div className="coursesSection">
      <h4>Our Popular Courses</h4>
      <div className="coursesGrid">
        {filteredCourses.map((course, index) => (
          <div className="courseCard" key={index}>
            <img src={course.courseImg} alt={course.title} className="courseImg" />

            <div className="courseContent">
              <div className="instructor">
                <img src={instructorImg} alt="Instructor" />
                <span>{course.name}</span>
              </div>

              <h5 className="titleCourse">{course.title}</h5>

              <div className="courseInfo">
                <div className="infoItem">
                  <BiTime className="icon" />
                  <span>{course.duration}</span>
                </div>
                <div className="infoItem">
                  <BiBook className="icon" />
                  <span>{course.lectures} Lectures</span>
                </div>
              </div>

              <div className="pricingReview">
                <span className="price">{course.price}</span>
                <div className="review">
                  <AiFillStar className="iconStar" />
                  <span>{course.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCourse;
