import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundIllustration from '../images/undraw_page_not_found_re_e9o6.svg'; 
import '../sass/404.scss';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src={NotFoundIllustration} alt="404 Not Found Illustration" className="not-found-illustration" />
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <p>It might have been moved or deleted.</p>
      <Link to="/" className="home-link">Go back to Home</Link>
    </div>
  );
};

export default NotFound;