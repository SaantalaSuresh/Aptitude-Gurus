import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';

const App = () => {
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

  return (
    <Router>
      <div className="app">
        
        <div className='small-devices'>
        <Navbar contents={contents} />
        </div>
        <Sidebar contents={contents} />
        <div className='nav-container'>
        <div className='large-devies'> 
        <Navbar contents={contents} />
        </div>
        <Routes>
          {contents.map((item) => (
            <Route key={item.keyword} path={`/${item.keyword}`} element={<MainContent title={item.title} content={item.content} imageUrl={item.imageUrl} />} />
          ))}
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
        </div>
        
      </div>
    </Router>
  );
};

export default App;
