import React, { useRef, useState } from 'react';
import styles from './index.module.css'

const SignUpForm = () => {
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [inputValue, setInputValue] = useState({ username: '', email: '', password: '' });

    const handleSignUp = async () => {
        try {
            const response = await fetch('https://auth-rg69.onrender.com/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: inputValue.username,
                    email: inputValue.email,
                    password: inputValue.password,
                }),
            });
            const data = await response.json();
            console.log(data);
            setInputValue({ username: '', email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.form}>
            <h2 className={styles.signup}>Sign Up</h2>
            <input
                value={inputValue.username}
                type="text"
                placeholder="Username"
                ref={usernameRef}
                onChange={(e) => setInputValue({ ...inputValue, username: e.target.value })}
            />
            <input
                value={inputValue.email}
                type="email"
                placeholder="Email"
                ref={emailRef}
                onChange={(e) => setInputValue({ ...inputValue, email: e.target.value })}
            />
            <input
                value={inputValue.password}
                type="password"
                placeholder="Password"
                ref={passwordRef}
                onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })}
            />
            <button onClick={handleSignUp}>Sign Up</button>
        </div>
    );
};

export default SignUpForm;