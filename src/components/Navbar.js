import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ contents }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentKeyword = location.pathname.split('/')[1];
  const currentIndex = contents.findIndex(content => content.keyword === currentKeyword);

  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(`/${contents[currentIndex - 1].keyword}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < contents.length - 1) {
      navigate(`/${contents[currentIndex + 1].keyword}`);
    }
  };

  return (
    <div className="navbar">
     <div>
     <button onClick={handlePrev} disabled={currentIndex <= 0}>Previous</button>
     </div>
      <div>
      <button onClick={handleNext} disabled={currentIndex >= contents.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default Navbar;
