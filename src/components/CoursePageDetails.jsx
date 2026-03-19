import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  BiTime,
  BiBook,
  BiChevronDown,
  BiHome,
  BiPlay,
  BiCheckCircle,
  BiLock,
  BiVideo,
  BiFile,
  BiMobileAlt,
  BiCommentDetail,
  BiBadgeCheck
} from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

import { coursesData } from "./coursesData";
import instructorImg from "../assets/men1.jpg";
import demoVideo from "../assets/demo.mp4";
import "./CoursePageDetails.css";

const CoursePageDetails = () => {
  const { id } = useParams();
  const course = coursesData.find(c => c.id === Number(id));

  const [openSection, setOpenSection] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [enrolled, setEnrolled] = useState(false);

  if (!course) return <p className="notFound">Course not found</p>;

  // Dynamic counts
  const totalLessons = course.curriculum
    ? course.curriculum.reduce((acc, sec) => acc + sec.lessons.length, 0)
    : 0;
  const totalVideos = course.curriculum
    ? course.curriculum.reduce((acc, sec) => acc + sec.lessons.filter(l => l.video).length, 0)
    : 0;

  const progress = totalLessons === 0 ? 0 : Math.round((completedLessons.length / totalLessons) * 100);

  // Load enrollment and progress from localStorage
  useEffect(() => {
    setEnrolled(localStorage.getItem(`enrolled-${id}`) === "true");
    const saved = JSON.parse(localStorage.getItem(`progress-${id}`) || "[]");
    setCompletedLessons(saved);
  }, [id]);

  // Save progress whenever completedLessons changes
  useEffect(() => {
    localStorage.setItem(`progress-${id}`, JSON.stringify(completedLessons));
  }, [completedLessons, id]);

  const toggleLesson = (lessonTitle, lessonVideo) => {
    if (!enrolled) return;

    setCompletedLessons(prev =>
      prev.includes(lessonTitle)
        ? prev.filter(l => l !== lessonTitle)
        : [...prev, lessonTitle]
    );

    if (lessonVideo) setCurrentVideo(lessonVideo);
  };

  return (
    <div className="courseDetailsPage">

      {/* Back Link */}
      <Link 
        to={`/category/${course.category.toUpperCase().replace(/\s+/g, '-')}`} 
        className="backLink"
      >
        <BiHome /> Back to {course.category}
      </Link>

      {/* HERO Section */}
      <div className="courseMain">
        <div className="videoWrapper">
          <video controls poster={course.image}>
            <source src={currentVideo || demoVideo} type="video/mp4" />
          </video>
        </div>

        <div className="courseInfoBox">
          <h1>{course.title}</h1>

          {/* Instructor */}
          <div className="instructorRow">
            <img src={instructorImg} alt="Instructor" />
            <span>{course.instructor}</span>
          </div>

          {/* Meta Info */}
          <div className="metaInfo">
            <div><BiTime /> {course.duration}</div>
            <div><BiBook /> {totalLessons} Lectures</div>
            <div><AiFillStar /> {course.rating}</div>
          </div>

          {/* Price & Enrollment */}
          <div className="priceBox">
            <span className="price">{course.price}</span>
            <button
              className="enrollBtn"
              onClick={() => {
                localStorage.setItem(`enrolled-${id}`, "true");
                setEnrolled(true);
              }}
            >
              {enrolled ? "Enrolled" : "Enroll Now"}
            </button>
          </div>

          {/* Dynamic Course Features */}
    

          {/* Progress Bar */}
          <div className="progressBox">
            <div className="progressHeader">
              <span>Your Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="progressBar">
              <div style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>
      <section className="courseFeatures">
            <h3>Course Includes</h3>
            <ul>
              {totalVideos > 0 && <li><BiVideo className="featureIcon" /> {totalVideos} video lessons</li>}
              {totalLessons - totalVideos > 0 && <li><BiFile className="featureIcon" /> {totalLessons - totalVideos} articles</li>}
              <li><BiMobileAlt className="featureIcon" /> Access on mobile and TV</li>
              <li><BiCommentDetail className="featureIcon" /> Closed captions</li>
              <li><BiBadgeCheck className="featureIcon" /> Certificate of completion</li>
            </ul>
          </section>
      {/* Course Content */}
      <section className="courseContentSection">
        <h2>Course Content</h2>
        {course.curriculum?.map((section, i) => (
          <div className="accordionItem" key={i}>
            <div
              className="accordionHeader"
              onClick={() => setOpenSection(openSection === i ? null : i)}
            >
              <h4>{section.title}</h4>
              <BiChevronDown className={openSection === i ? "rotate" : ""} />
            </div>

            {openSection === i && (
              <ul className="lessonList">
                {section.lessons.map((lesson, idx) => (
                  <li
                    key={idx}
                    onClick={() => toggleLesson(lesson.title, lesson.video)}
                    className={!enrolled ? "locked" : ""}
                  >
                    {enrolled ? <BiPlay /> : <BiLock />}
                    <span>{lesson.title}</span>
                    {completedLessons.includes(lesson.title) && <BiCheckCircle className="completed" />}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Instructor Section */}
      <section className="instructorSection">
        <h2>Instructor</h2>
        <div className="instructorCard">
          <img src={instructorImg} alt="Instructor" />
          <div>
            <h4>{course.instructor}</h4>
            <p>Senior Instructor with 8+ years of experience teaching practical, real-world projects.</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviewsSection">
        <h2>Student Reviews</h2>
        {[1, 2, 3].map((_, i) => (
          <div className="reviewCard" key={i}>
            <div className="reviewHeader">
              <img src={instructorImg} alt="Student" />
              <div>
                <h5>Student {i + 1}</h5>
                <span>
                  <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                </span>
              </div>
            </div>
            <p>Excellent course! Very clear explanation and practical examples.</p>
          </div>
        ))}
      </section>

    </div>
  );
};

export default CoursePageDetails;
