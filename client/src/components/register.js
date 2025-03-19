import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
      <div className='container mt-5'>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" name="email" value={Register.email} onChange={handelInputChange} required aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={Register.name} onChange={handelInputChange} required placeholder="Enter Name" />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" value={Register.password} required onChange={handelInputChange} placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Register