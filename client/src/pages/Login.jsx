import React from "react";
import '../assets/css/login.css';
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

 
import { useNavigate } from 'react-router-dom';



export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")git 
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt with:", { email, password })
    // Simulamos un inicio de sesión exitoso
    navigate("/dashboard")
  }

  const handleGoogleLogin = () => {
    console.log("Login with Google")
    navigate("/dashboard")
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-logo">
          <div className="logo-circle">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,50 Q40,20 60,50 T100,50" fill="none" stroke="#ccc" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="auth-form-container">
          <div className="auth-header">
            <button className="back-button" onClick={() => navigate("/")}>
              <FaArrowLeft /> Go Back
            </button>
            <h1>Welcome!</h1>
            <p>Please sign in your account.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>

            <div className="forgot-password">
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="auth-button">
              Login
            </button>

            <div className="divider">
              <span>Or continue with</span>
            </div>

            <button type="button" className="google-button" onClick={handleGoogleLogin}>
              <FcGoogle size={20} /> Google
            </button>

            <div className="auth-footer">
              <p>
                Don't have an account?{" "}
                <a
                  href="/register"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate("/register")
                  }}
                >
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
