import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Workly</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link  className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to='/features'>Features</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to='/about'>About</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to='/contact'>Contact</Link>
            </li>
          </ul>
          {!isLoggedIn ? (
            <>
              <Link to="/login">
                <button className="btn btn-primary ms-3">Sign In</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-primary ms-2">Sign Up</button>
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className="btn btn-danger ms-3">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
