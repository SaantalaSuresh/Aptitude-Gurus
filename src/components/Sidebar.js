import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ contents }) => {
  return (
    <div className="sidebar">
      <h2>Contents</h2>
      <ul className="sidebar-list">
        {contents.map((item) => (
          <li key={item.keyword} className="sidebar-item">
            <Link className="sidebar-link" to={`/${item.keyword}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
