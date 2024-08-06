import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './UserContext';
import App from './App';

const AppWrapper = () => (
  <UserProvider>
    <Router>
      <App />
    </Router>
  </UserProvider>
);

export default AppWrapper;
