import React, { useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom'

function Register() {
  const [Register, setregisterFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handelInputChange = (event) => {
    const { name, value } = event.target
    setregisterFormData({
      ...Register,
      [name]: value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:5000/user/register", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(Register) })
      const result = await response.json()
      navigate('/login')
    } catch (error) {
      console.log(error.message)
    } finally {
      setregisterFormData({
        name: '',
        email: '',
        password: ''
      })
    }
  }

  return (
    <>
      <div className="registermain">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>
          <h2 className="card-title text-center mb-4">Sign Up</h2>
          <form onSubmit={onSubmit}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={Register.email}
                onChange={handelInputChange}
                required
                placeholder="name@example.com"
              />
              <label htmlFor="email">Email address</label>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={Register.name}
                onChange={handelInputChange}
                required
                placeholder="Enter Name"
              />
              <label htmlFor="name">Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={Register.password}
                onChange={handelInputChange}
                required
                placeholder="Password"
              />
              <label htmlFor="password">Password</label>
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-dark">
                Sign Up
              </button>
            </div>

            <div className="text-center">
              <p className="login-footer">
                Already have an account? <Link to="/login">Sign In</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register