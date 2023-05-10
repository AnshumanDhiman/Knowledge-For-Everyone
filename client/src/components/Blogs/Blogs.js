import React from 'react';
import NavbarLogin from "../../components/NavbarLogin/NavbarLogin";
import ThisFooter from "../../components/Footer/Footer";
import './BlogPage.css';
import onlineLearningBenefits from './images/1.jpg';
import onlineLearningPlatforms from './images/2.jpg';
import onlineClassSuccess from './images/3.jpg';
import onlineLearningProsCons from './images/1.jpg';
import onlineCourseStudyPlan from './images/2.jpg';
import onlineClassEngagement from './images/3.jpg';

const BlogPage = () => {
  const blogPosts = [
    {
      title: '10 Benefits of Online Learning',
      url: '/blog/online-learning-benefits',
      image: onlineLearningBenefits,
      date: 'May 1, 2023',
      summary: 'Learn about the advantages of online education and why it may be the right choice for you.'
    },
    {
      title: '5 Best Online Learning Platforms for Students',
      url: '/blog/online-learning-platforms',
      image: onlineLearningPlatforms,
      date: 'May 3, 2023',
      summary: 'Explore some of the top e-learning platforms available to students today.'
    },
    {
      title: 'How to Succeed in Online Classes',
      url: '/blog/online-class-success',
      image: onlineClassSuccess,
      date: 'May 5, 2023',
      summary: 'Get tips and advice for achieving academic success in your online courses.'
    },
    {
      title: 'The Pros and Cons of Online Learning',
      url: '/blog/online-learning-pros-cons',
      image: onlineLearningProsCons,
      date: 'May 7, 2023',
      summary: 'Discover both the benefits and drawbacks of online education to help you make an informed decision.'
    },
    {
      title: 'Creating a Study Plan for Online Courses',
      url: '/blog/online-course-study-plan',
      image: onlineCourseStudyPlan,
      date: 'May 9, 2023',
      summary: 'Learn how to create an effective study plan to stay organized and motivated in your online classes.'
    },
    {
      title: 'Staying Engaged in Online Classes',
      url: '/blog/online-class-engagement',
      image: onlineClassEngagement,
      date: 'May 11, 2023',
      summary: 'Find out how to stay engaged and participate actively in your virtual classroom for a better learning experience.'
    }
  ];

  return (
    <>
    <NavbarLogin />
    <div className="blog-page">
      <h1>Welcome to my Blog!</h1>
      <h2>Posts related to Online Education</h2>
      <ul>
        {blogPosts.map((post, index) => (
          <li key={index}>
            <a href={post.url}>
              <div className="blog-post">
                <img src={post.image} alt={post.title} />
                <div className="blog-post-content">
                  <h3>{post.title}</h3>
                  <p>{post.summary}</p>
                  <p className="post-date">Published: {post.date}</p>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
      <ThisFooter/>
    </>
  );
}

export default BlogPage;
