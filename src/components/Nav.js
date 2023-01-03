import React from "react";
import { Icon } from "antd";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <NavLink
        title="HOME"
        className="nav__link"
        activeClassName="nav__link--active"
        to="/"
        exact
      >
        <Icon type="home" />
        
      </NavLink>
      <NavLink
        title="SEARCH" 
        className="nav__link"
        activeClassName="nav__link--active"
        to="/search"
      >
        <Icon type="search" />
        
      </NavLink>
      <NavLink
        className="nav__link"
        activeClassName="nav__link--active"
        to="/favourited"
        
      >
        <Icon type="user" />
        
      </NavLink>
    </div>
  );
};

export default Nav;
