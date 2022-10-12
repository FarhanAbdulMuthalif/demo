import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="headerBody">
      <h1>React Router</h1>

      <ul>
        <li>
          <Link className="listtext" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="listtext" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="listtext" to="/profile">
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
