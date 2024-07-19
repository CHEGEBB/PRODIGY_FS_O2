import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../sass/Auth.scss';
import Vector1 from "../images/undraw_working_re_ddwy.svg";
import Vector2 from "../images/undraw_team_up_re_84ok.svg";
import { useNavigate } from 'react-router-dom';

const AuthenticationPages = ({ onLogin }) => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    if (username === 'admin' && password === 'password123') {
      onLogin();
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Here you would typically handle the sign-up process
    // For now, we'll just show an alert
    alert('Sign up functionality not implemented yet.');
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSignIn} className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className='usercon' />
              <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className='lockcon' />
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </form>
          <form onSubmit={handleSignUp} className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className='usercon' />
              <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className='envelopcon'/>
              <input 
                type="email" 
                placeholder="Email" 
                className='input-div bg-slate-500'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className='lockcon' />
              <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Enter your personal details and start journey with us
            </p>
            <button className="btn transparent" onClick={toggleMode}>
              Sign up
            </button>
          </div>
          <img src={Vector1} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="btn transparent" onClick={toggleMode}>
              Sign in
            </button>
          </div>
          <img src={Vector2} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPages;