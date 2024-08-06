import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { useAuth } from './AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { user, setUser } = useAuth(); 
  const handleSignUp = async () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/users?email=${email}`);
      const data = await response.json();

      if (data.length > 0) {
        setError('Email already exists');
      } else {
        await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password: newPassword }),
        });
        setUser({ email, role: 'user' }); 
        navigate('/Dashboard');
      }
    } catch (err) {
      setError('Error signing up');
    }
  };

  return (
    <div className="signup-background">
      <div className="container5">
        <h1><span style={{ color: 'red' }}>S</span>ign <span style={{ color: 'red' }}>U</span>p</h1>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSignUp}>Sign Up</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;
