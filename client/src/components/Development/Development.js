import React from 'react';
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import ThisFooter from "../../components/Footer/Footer";
import './Development.css';

const Development = () => {
  return (
    <>
    <NavbarLogin/>
    <div className="offers-page">
      <h1>Our Development Courses</h1>
      <ul>
        <li>
          <div className="offer">
            <img src="https://www.iimu.ac.in/blog/wp-content/uploads/2019/10/MBA-courses-offered-by-IIM-to-your-stellar-Career.jpg" alt="Offer 1" />
            <div className="offer-content">
              <h2>50% off on all courses</h2>
              <p>Use code LEARN50 at checkout to get 50% off on all online courses</p>
              <p>Valid until June 30, 2023</p>
            </div>
          </div>
        </li>
        <li>
          <div className="offer">
            <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/06/30200344/MBA-after-BSc.jpg" alt="Offer 2" />
            <div className="offer-content">
              <h2>Free course for new users</h2>
              <p>Sign up for our platform and get a free online course of your choice</p>
              <p>Valid until December 31, 2023</p>
            </div>
          </div>
        </li>
        <li>
          <div className="offer">
            <img src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/12/23173729/Master-of-Arts.jpg" alt="Offer 3" />
            <div className="offer-content">
              <h2>Refer a friend and get 20% off</h2>
              <p>Refer a friend to our platform and get 20% off on your next purchase</p>
              <p>Valid until December 31, 2023</p>
            </div>
          </div>
        </li>
        <li>
          <div className="offer">
            <img src="https://leverageedu.com/learn/wp-content/uploads/2023/01/Blog-Cover-14.png" alt="Offer 4" />
            <div className="offer-content">
              <h2>Special discount for teachers</h2>
              <p>Teachers get 25% off on all online courses</p>
              <p>Valid until December 31, 2023</p>
            </div>
          </div>
        </li>
        <li>
          <div className="offer">
            <img src="https://www.coursesxpert.com/wp-content/uploads/2019/08/Courses-After-Graduation-in-Commerce.jpg" alt="Offer 5" />
            <div className="offer-content">
              <h2>Summer Sale</h2>
              <p>Get 30% off on all online courses this summer</p>
              <p>Valid until September 30, 2023</p>
            </div>
          </div>
        </li>
        <li>
          <div className="offer">
            <img src="https://www.tafecourses.com.au/wp-content/uploads/SA.jpg" alt="Offer 6" />
            <div className="offer-content">
              <h2>Get certified for free</h2>
              <p>Enroll in any certification course and get certified for free</p>
              <p>Valid until December 31, 2023</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <ThisFooter/>
    </>
  );
};

export default Development;