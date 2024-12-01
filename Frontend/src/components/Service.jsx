import React, { useState } from 'react';

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
        <section id="newsletter-signup" style={styles.container}>
            <div style={styles.left}>
                <h2 style={styles.title}>Join Our Newsletter Community</h2>
            </div>
            <div style={styles.right}>
                <p style={styles.description}>
                    Stay informed with the latest security insights, threat updates, 
                    and exclusive offers delivered straight to your inbox! Sign up now 
                    to ensure you never miss an essential update in cybersecurity!
                </p>
                {submitted ? (
                    <p style={styles.successMessage}>Thank you for signing up!</p>
                ) : (
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            style={styles.input}
                            required
                        />
                        <button type="submit" style={styles.button}>Join Now</button>
                    </form>
                )}
                <p style={styles.terms}>
                    By clicking Sign Up you're confirming that you agree with our 
                    <a href="/terms" style={styles.link}> Terms and Conditions</a>.
                </p>
            </div>
        </section>
    );
};

const styles = {
    container: {
        display: 'flex',
        backgroundColor: '#000',
        color: '#fff',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '800px',
        margin: 'auto',
    },
    left: {
        flex: 1,
        textAlign: 'left',
        paddingRight: '20px',
    },
    right: {
        flex: 2,
        textAlign: 'right',
    },
    title: {
        fontSize: '2rem',
        marginBottom: '10px',
    },
    description: {
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        justifyContent: 'right',
        marginBottom: '20px',
    },
    input: {
        padding: '10px',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '4px',
        marginRight: '10px',
        flex: '1',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: '#fff',
        color: '#000',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    successMessage: {
        color: '#4CAF50',
    },
    terms: {
        fontSize: '0.8rem',
        marginTop: '10px',
    },
    link: {
        color: '#fff',
        textDecoration: 'underline',
    },
};

export default NewsletterSignup;
