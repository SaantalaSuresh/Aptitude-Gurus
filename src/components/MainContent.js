
import React from 'react';
import { Link } from 'react-router-dom';
import './MainContent.css';

const MainContent = ({ title, content, imageUrl }) => {
  return (
    <div className="container">
      <nav>
        <Link to="/" className="link">
          <h3>Home</h3>
        </Link>
      </nav>
      <div className="main-content">
        <h2>{title}</h2>
        <img src={imageUrl} className="main-image" alt={title} />
        <p>{content}</p>
      </div>
    </div>
  );
};

export default MainContent;