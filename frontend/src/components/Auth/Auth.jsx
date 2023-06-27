import React, { useState }  from "react";
import "./Auth.css";
import {Authentication_rafiki,mediXlogo_2} from "../../assets";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the email, password, and confirmPassword state values here
  };

  return (
    <div className="container">
      <div className="aqua-section">
        <img src={Authentication_rafiki} className="auth-image" alt/>
      </div>
      <div className="gray-section">
        <div className="main-form-container">
          <div className="form-header">
            <div className="logo">
              <img src={mediXlogo_2} alt="logo" />
            </div>
            <div className="logo-name">MediXtranS</div>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <div className="remember-forgot-container">
              <div className="rememberMe">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <a href="link">Forgot Password</a>
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="login-message">
            Already have Account? <a href="link">Login Here</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
