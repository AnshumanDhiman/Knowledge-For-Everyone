import React from 'react';
import './FAQs.css';
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import ThisFooter from "../../components/Footer/Footer";

function FAQ() {
  return (
    <>
    <NavbarLogin/>
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="question">
        <h2>What courses do you offer?</h2>
        <p>We offer a wide range of courses in various fields, including technology, business, healthcare, and more. You can browse our course catalog to see the full list of courses we offer.</p>
      </div>
      <div className="question">
        <h2>How much do your courses cost?</h2>
        <p>Our course prices vary depending on the course and the level of certification you are seeking. Please refer to the course description page for pricing information.</p>
      </div>
      <div className="question">
        <h2>What if I need help with a course?</h2>
        <p>We offer a range of support options, including online chat, email support, and phone support. Our team of support agents is available to help you with any questions or issues you may encounter.</p>
      </div>
      <div className="question">
        <h2>How long do I have access to a course?</h2>
        <p>Once you enroll in a course, you will have access to it for a specified period of time, which varies depending on the course. Please refer to the course description page for information on course access.</p>
      </div>
      <div className="question">
        <h2>Do you offer refunds?</h2>
        <p>We offer refunds in certain circumstances, such as if you are unable to access a course due to technical issues or if you are unsatisfied with the course content. Please refer to our refund policy for more information.</p>
      </div>
    </div>
    <ThisFooter/>
    </>
  );
}

export default FAQ;