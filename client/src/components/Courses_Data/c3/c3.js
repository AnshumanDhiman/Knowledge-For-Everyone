import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import "./c3.css";

const courseData = [
  {
    id: 1,
    title: "Introduction to React",
    description:
      "Learn the basics of React and how to build your own components.",
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },
  {
    id: 2,
    title: "React Hooks",
    description:
      "Learn how to use React Hooks to manage state and side effects in your components.",
    videoUrl: "https://www.youtube.com/embed/dpw9EHDh2bM",
  },
  {
    id: 3,
    title: "React Router",
    description:
      "Learn how to use React Router to build multi-page applications in React.",
    videoUrl: "https://www.youtube.com/embed/91F8reC8kvo",
  },
];

function CoursePage() {
  const [currentCourse, setCurrentCourse] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    if (currentCourse === courseData.length - 1) {
      // Congratulation page when the user reaches the maximum page
      setCurrentCourse("done");
    } else {
      setCurrentCourse(currentCourse + 1);
      setProgress((currentCourse + 1) * 100 / courseData.length);
    }
    //if course is completed, return to home
    if (currentCourse === "done") {
      window.location.href = "/notes";
    }
    

  };

  const renderCourse = () => {
    if (currentCourse === "done") {
      return (
        <>
        <br/>
        <div className="congratulations">
          <h1>Congratulations!</h1>
          <p>You have completed all the courses.</p>
        </div>
        <br/> <br/>
        </>
      );
    } else {
      const course = courseData[currentCourse];
      return (
        <div>
          <div className="video-container">
            <iframe
              title={course.title}
              src={course.videoUrl}
              allowFullScreen
            ></iframe>
          </div>
          <br/>
          <div className="course-info-c">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="app-container">
      <header>
      <br/> <br/>
        <h1 style={{textAlign:'center'}}>Course Viewer</h1>
      </header>
      {renderCourse()}
      <div className="progress-bar-container">
        <ProgressBar now={progress} />
      </div>
      <div className="button-container">
        <button onClick={handleNext} className="next-button">Next</button>
      </div>
    </div>
  );
}

export default CoursePage;
