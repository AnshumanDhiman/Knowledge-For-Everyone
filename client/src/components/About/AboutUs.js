import React from 'react';
import './AboutUs.css';
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import ThisFooter from "../../components/Footer/Footer";
import Anshuman from './image/anshuman.jpeg';
import Prashant from './image/prashant.jpg';


function AboutUs() {
  return (
    <>
    <NavbarLogin/>
    <div className="about-us">
      <h1>About Us</h1>
      <p>We are a team of educators and technologists who are passionate about making education accessible and engaging for everyone.</p>
      <p>Our mission is to provide high-quality, affordable online courses that empower students to achieve their goals and enhance their careers.</p>
      <p>Our courses are designed by industry experts and are constantly updated to reflect the latest trends and technologies in each field.</p>
      <p>Whether you're looking to learn a new skill, advance your career, or simply explore a new subject, our courses are designed to meet your needs.</p>
      <h2>Meet Our Team</h2>
      <div className="team-members">
        <div className="member">
          <img src={Prashant} alt="Prashant Sharma" />
          <h3>Prashant Sharma</h3>
          <p>Lead Educator</p>
        </div>
        <div className="member">
          <img src={Anshuman} alt="Anshuman Dhiman" />
          <h3>Anshuman Dhiman</h3>
          <p>Lead Technologist</p>
        </div>
        {/* <div className="member">
          <img src="https://placehold.it/150x150" alt="Samantha Lee" />
          <h3>Samantha Lee</h3>
          <p>Marketing Director</p>
        </div> */}
      </div>
    </div>
    <ThisFooter/>
    </>
  );
}

export default AboutUs;
