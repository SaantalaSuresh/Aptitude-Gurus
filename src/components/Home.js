import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const contents = [
 
  { 
    keyword: 'learn-cpp', 
    title: 'Week 1: Let\'s Learn C++', 
    content: `Week 1 of our C++ learning series covering basic syntax, data types, control structures, and functions.`,
    imageUrl: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230703144619/CPP-Language.png' 
  },
  { 
    keyword: 'learn-java', 
    title: 'Let\'s Learn Java', 
    content: `Comprehensive Java programming course covering object-oriented concepts, advanced features, and practical applications.`,
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*y0JUbU3ol5dYsYDyoIxmoA.jpeg' 
  },
  { 
    keyword: 'oops', 
    title: 'Object Oriented Programming Systems (OOPS)', 
    content: `Master Object-Oriented Programming (OOP) with classes, objects, inheritance, polymorphism, and encapsulation.`,
    imageUrl: 'https://media.licdn.com/dms/image/D5612AQF50J9eOqvAPQ/article-cover_image-shrink_720_1280/0/1674911955814?e=1724889600&v=beta&t=CbV2LnHetMFJxw22X5lPQf0nJSUYVHXgC8kUTMJH_mE' 
  },
  { 
    keyword: 'cpp-stl', 
    title: 'C++ STL', 
    content: `Explore the C++ Standard Template Library (STL) with container classes, sorting algorithms, and utilities for efficient programming.`,
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*JS6Zv0pRf2aB67VynLfI0g.png' 
  },
  { 
    keyword: 'orientation-session', 
    title: 'Orientation Session', 
    content: `Orientation Session for insights into our programs, resources, and community guidelines.`,
    imageUrl: 'https://news.vidyaacademy.ac.in/wp-content/uploads/2022/08/Orientation-Session.png' 
  },
  { 
    keyword: 'discord-group', 
    title: 'Steps to join Discord Group', 
    content: `Join our vibrant Discord community for knowledge sharing, networking, and real-time support. Connect with learners, mentors, and enthusiasts effortlessly.`,
    imageUrl: 'https://support.slooh.com/hubfs/image-png-Feb-22-2022-05-41-52-51-PM.png' 
  },
];


const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to Our Website</h1>
        <p className="subtitle">Discover Amazing Things Here</p>
      </header>
     
      <section className="courses">
        <h2>Featured Courses</h2>
        <div className="course-list">
          {contents.map((course) => (
          <Link className="link" to={`/${course.keyword}`}>
            <div key={course.keyword} className="course">
              <img src={course.imageUrl} alt={course.title} className="course-image" />
              <div className="course-info">
                <h3>{course.title}</h3>
                <p>{course.content}</p>
              </div>
            </div></Link>
          ))}
        </div>
      </section>
      <section className="content">
        <div className="main-content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            consequat mauris in turpis posuere, at finibus purus tincidunt.
            Nullam consequat felis eget quam pharetra, id venenatis augue
            aliquet.
          </p>
          <p>
            Fusce scelerisque, odio sed lobortis tincidunt, libero justo
            fringilla ligula, nec facilisis eros metus non lorem. Donec a
            fringilla justo.
          </p>
        </div>
        <div className="sidebar">
          <h3>Recent Updates</h3>
          <ul>
            <li>Latest News</li>
            <li>New Features Added</li>
            <li>Upcoming Events</li>
          </ul>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
