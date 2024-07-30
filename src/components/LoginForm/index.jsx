import React, { useRef, useState } from 'react';
import styles from './index.module.css'

const LoginForm = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const [inputValue, setInputValue] = useState({ username: '', password: '' });

    const handleLogin = async () => {
        try {
            const response = await fetch('https://auth-rg69.onrender.com/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: usernameRef.current.value,
                    password: passwordRef.current.value,
                }),
            });
            const data = await response.json();
            console.log(data);
            setInputValue({ username: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.form}>
            <h2 className={styles.login}>Login</h2>
            <input
                value={inputValue.username}
                type="text"
                placeholder="Username"
                ref={usernameRef}
                onChange={(e) => setInputValue({ ...inputValue, username: e.target.value })}
            />
            <input
                value={inputValue.password}
                type="password"
                placeholder="Password"
                ref={passwordRef}
                onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })}
            />
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
};

export default LoginForm;