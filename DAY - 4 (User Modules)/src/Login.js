import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { useAuth } from './AuthContext';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuth(); 
  const handleLogin = async () => {
    try {
      let response = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`);
      let data = await response.json();

      if (data.length === 0) {
        response = await fetch(`http://localhost:5000/admin?email=${email}&password=${password}`);
        data = await response.json();
        
        if (data.length === 0) {
          setError('Invalid email or password');
          return;
        } else {
          setUser('admin'); 
          navigate('/admin-dashboard');
        }
      } else {
        setUser('user'); 
        navigate('/Dashboard');
      }
    } catch (err) {
      setError('Error logging in');
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="firstcontainer">
      <div className="container8">
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="signup-container">
          <span>If new user, </span>
          <button className="secondary-small" onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
