import React, { useState } from 'react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Email submitted: ${email}`);
        setSubmitted(true);
        setEmail('');
    };

    return (
        <section id="newsletter-signup" className="container">
            <div className="left">
                <h2 className="title">Join Our Newsletter Community</h2>
            </div>
            <div className="right">
                <p className="description">
                    Stay informed with the latest security insights, threat updates, 
                    and exclusive offers delivered straight to your inbox! Sign up now 
                    to ensure you never miss an essential update in cybersecurity!
                </p>
                {submitted ? (
                    <p className="success-message">Thank you for signing up!</p>
                ) : (
                    <form onSubmit={handleSubmit} className="form">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="input"
                            required
                        />
                        <button type="submit" className="button">Join Now</button>
                    </form>
                )}
                <p className="terms">
                    By clicking Sign Up you're confirming that you agree with our 
                    <a href="/terms" className="link"> Terms and Conditions</a>.
                </p>
            </div>
        </section>
    );
};

export default NewsletterSignup;
