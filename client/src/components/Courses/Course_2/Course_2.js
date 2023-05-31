import React from 'react';
import NavbarLogin from "../../NavbarLogin/NavbarLogin";
import './Course_2.css';
import { Users } from "../../../dummyData";
import Online from "../../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";
import Footer from "../../Footer/Footer";

export default function Buy() {


  return (
    <> <NavbarLogin />
    <div className="course-page">
      <div className="course-image-container">
        <img className="course-image" src="https://d2alvkbeky9xdq.cloudfront.net/course/9uy14.jpg" alt="Course" />
      </div>
      <div className="course-info">
        <h1 className="course-title">Python Course</h1>
        <p className="course-description">Learn the fundamentals of React.js and build your own web applications!</p>
        <div className="course-details">
          <div>
            <h2>What you'll learn</h2>
            <ul>
              <li>React.js basics</li>
              <li>Component architecture</li>
              <li>State management</li>
              <li>API integration</li>
            </ul>
          </div>
          <div>
            <h2>Language</h2>
            <p>English</p>
          </div>
          <div>
            <h2>Difficulty</h2>
            <p>Beginner</p>
          </div>
        </div>
        <p className="course-price">Free</p>
        <a href="/c2"><button className="buy-button">Start Course</button></a>
          {/* {user.username !== currentUser.username && (
            <button className="rightbarFollowButton" onClick={handleClick}>
              {followed ? "Unfollow" : "Follow"}
              {followed ? <Remove /> : <Add />}
            </button>
          )} */}
        {/* update database if user buys course */}
        


      </div>
      
      <div className="user-reviews">
        <h2>User Reviews</h2>
        <div className="review">
          <h3 className="review-author">John Smith</h3>
          <p className="review-text">This course was great! I learned so much about React and was able to build my own web app.</p>
        </div>
        <div className="review">
          <h3 className="review-author">Jane Doe</h3>
          <p className="review-text">The instructor was very clear and easy to understand. I highly recommend this course to anyone wanting to learn React.</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

