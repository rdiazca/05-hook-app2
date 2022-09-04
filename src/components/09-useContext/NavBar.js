import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          useContext
        </a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              to={"/"}
              className="nav-link active"
              aria-current="page"
              href="#"
            >
              Home
            </Link>
            <Link to={"./login"} className="nav-link" href="#">
              Login
            </Link>
            <Link to={"./about"} className="nav-link" href="#">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
