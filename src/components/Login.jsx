import React, { useState } from 'react';
import './login.css'; // Import the CSS file

const Login = ({ handleLogin, handleSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    handleSignUp({ email: signupEmail, password: signupPassword });
  };

  const toggleSignup = () => {
    setIsSigningUp(!isSigningUp);
  };

  if (isSigningUp) {
    return (
      <div className="login-container">
        <div className="login-form-container">
          <form onSubmit={handleSignupSubmit}>
            <label>
              Email
               <br />
              <input
                type="email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password
            <br />
              <input
                type="password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Sign Up</button>
            <p className="signup-link">
              Already have an account?{' '}
              <button onClick={toggleSignup}>Login</button>
            </p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-form-container">
        
        <form onSubmit={handleLoginSubmit}>
        <h2>Login</h2>
          <label>
            Email
          <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password
          <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
          <p className="signup-link">
            Don't have an account?{' '}
            <button onClick={toggleSignup}>Sign Up</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
