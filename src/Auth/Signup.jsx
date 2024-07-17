import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../sass/SignUp.scss";

library.add(fab, faUser, faLock, faEnvelope);

const SignUp = () => {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h1>Sign Up</h1>
            <div className="input-container">
              <FontAwesomeIcon icon="user" className="icon" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-container ">
              <FontAwesomeIcon icon="envelope" className="icon" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-container">
              <FontAwesomeIcon icon="lock" className="icon" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-container">
              <FontAwesomeIcon icon="lock" className="icon" />
              <input type="password" placeholder="Confirm Password" />
            </div>
            <button type="submit">Sign Up</button>
            <div className="socials-container">
              <div className="social-icons">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <p>
        Already have an account? <a href="login">Login</a>
      </p>
    </div>
  );
};

export default SignUp;
