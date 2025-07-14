"use client"

import { useState } from "react"
import "./signup-form.css"

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }

    console.log("Form submitted:", formData)
  }

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`)
  }

  return (
    <div className="signup-container">
      <div className="background-image"></div>
      <div className="form-overlay">
        <div className="signup-card">
          <h1 className="form-title">Create Your Account</h1>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="input-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>

          <div className="divider">
            <span>or sign up with</span>
          </div>

          <div className="social-buttons">
            <button className="social-button google" onClick={() => handleSocialLogin("Google")}>
              <span className="social-icon">G</span>
              Google
            </button>

            <button className="social-button facebook" onClick={() => handleSocialLogin("Facebook")}>
              <span className="social-icon">f</span>
              Facebook
            </button>

            <button className="social-button apple" onClick={() => handleSocialLogin("Apple")}>
              <span className="social-icon">🍎</span>
              Apple
            </button>
          </div>

          <div className="signin-link">
            Already have an account? <a href="#signin">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupForm
