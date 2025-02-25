// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlus } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <FaHome className="mr-2" /> My Blog
        </Link>
        <nav>
          <Link to="/create">
            <FaPlus className="mr-2" /> Create Post
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;