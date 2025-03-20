import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={login.email}
            onChange={handleInputChange}
            required
            placeholder="Enter email"
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={login.password}
            onChange={handleInputChange}
            required
            placeholder="Enter Password"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">Login</button>
      </form>
    </div>
  );
}

export default Login;
