import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../sass/Auth.scss';
import Vector1 from "../images/undraw_working_re_ddwy.svg";
import Vector2 from "../images/undraw_team_up_re_84ok.svg";

const AuthenticationPages = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className='usercon' />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className='lockcon' />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="facebook.com" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="google" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="google" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className='usercon' />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className='envelopcon'/>
              <input type="email" placeholder="Email" className='input-div bg-slate-500' />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className='lockcon' />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="facebook" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="google.com" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="linkedin.com" className="social-icon">
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