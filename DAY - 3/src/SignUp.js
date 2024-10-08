
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Perform signup logic here
    navigate('/home');
  };

  return (
    <div className="signup-background">
      <div className="container">
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
      </div>
    </div>
  );
};

export default SignUp;
