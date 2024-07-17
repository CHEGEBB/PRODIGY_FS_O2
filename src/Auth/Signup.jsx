import React, { useState } from 'react';
import '../sass/SignUp.scss';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container-login">
      <div className="forms-container-login">
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="input-container-login">
            <i className="fas fa-user icon"></i>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container-login">
            <i className="fas fa-envelope icon"></i>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container-login">
            <i className="fas fa-lock icon"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button type="submit">Sign Up</button>
          </div>
          <div className="exist">
            <p>Already have an account? Sign In</p>
          </div>
          <div className="socials-container-login">
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-google"></i></a>
            </div>
          </div>
        </form>
      </div>
      <div className="panels-container">
        <div className="left-panel">
          <div className="panel">
            <div className="content">
              <h3>New here?</h3>
              <p>Enter your personal details and start journey with us</p>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;