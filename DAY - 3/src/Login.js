
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login-background">
      <div className="container">
        <h1><span style={{ color: 'red' }}>L</span>ogin</h1>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        <div className="signup-container">
          <span>If new user, </span>
          <button className="secondary-small" onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
