import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div id="container" className="container">
      <div className="row">
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
