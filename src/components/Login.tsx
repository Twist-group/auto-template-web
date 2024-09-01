import React, { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [keepSignedIn, setKeepSignedIn] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleKeepSignedInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeepSignedIn(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted with email:', email, 'and password:', password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-title">
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group keep-signed-in">
            <input
              type="checkbox"
              id="keepSignedIn"
              checked={keepSignedIn}
              onChange={handleKeepSignedInChange}
            />
            <label htmlFor="keepSignedIn">Keep me signed in</label>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
      <div className="image-container">
        <img src="https://via.placeholder.com/600x800" alt="Login" />
      </div>
    </div>
  );
};

export default Login;
