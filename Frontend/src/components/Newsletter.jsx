import * as React from "react";
import { newsLetter } from "../constants";
import './Newsletter.css'; // Import the external CSS file

export default function Newsletter() {
  return (
    <section className="newsletter-container" aria-labelledby="newsletter-heading">
      <div className="newsletter-content">
        {/* Left Section: Title */}
        <h2 id="newsletter-heading" className="newsletter-title">
          {newsLetter[0].title}
        </h2>

        {/* Right Section: Description and Form */}
        <div className="newsletter-form-container">
          <p className="newsletter-description">
            {newsLetter[0].text}
          </p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Email Input */}
            <div className="email-input-container">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="email-input"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="newsletter-submit-btn"
            >
              Join Now
            </button>
          </form>
          <p className="newsletter-terms">
            By clicking Join Now you're confirming that you agree with our{" "}
            <a href="#" className="newsletter-link">
              Terms and Conditions
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
