import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <>
      <div className="header container">
        <div className="header_left">
          <div className="Logo_and_Nav">
            <NavLink to="/">
              <img src="./img/logo.png" alt="logo" />
            </NavLink>
          </div>
          <div className="nav_container">
            <NavLink className="nav" to="/movies/popular">
              <span>Popular</span>
            </NavLink>
            <NavLink className="nav" to="/movies/top_rated">
              <span>Top Rated</span>
            </NavLink>
            <NavLink className="nav" to="/movies/upcoming">
              <span>Upcoming</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
