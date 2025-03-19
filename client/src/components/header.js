import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <Link className="navbar-brand text-light" to=''>
          Workly
        </Link>
        <div className="d-flex">
          <Link to="login" className="btn btn-outline-success me-2">
            Login
          </Link>
          <Link to="register" className="btn btn-success">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
