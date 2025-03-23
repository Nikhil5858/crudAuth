import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';

function Login() {
  const [login, setLoginFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({
      ...login,
      [name]: value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("token", result.token); 
        alert("Login Successful!");
        navigate("/");
      } else {
        alert(result.message || "Login failed!");
      }
    } catch (error) {
      console.error("Login Error:", error.message);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="registermain">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>
          <h2 className="card-title text-center mb-4">Sign In</h2>
          <form onSubmit={onSubmit}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={login.email}
                onChange={handleInputChange}
                required
                placeholder="name@example.com"
              />
              <label htmlFor="email">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={login.password}
                onChange={handleInputChange}
                required
                placeholder="Password"
              />
              <label htmlFor="password">Password</label>
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-dark">
                Next
              </button>
            </div>

            <div className="text-center">
              <p className="login-footer">
                Don't have an account? <Link to="/register">Create an Account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
