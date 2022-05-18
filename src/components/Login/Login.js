import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase-config.js';
import { login } from '../../redux/userSlice.js';
import './Login.scss';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const dispatch = useDispatch();
  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(loginEmail, loginPassword)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
        setLoginEmail('');
        setLoginPassword('');
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    if (!registerName) {
      alert('Please enter a full name');
    }
    auth
      .createUserWithEmailAndPassword(registerEmail, registerPassword)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: registerName,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.displayName,
              })
            );
            setRegisterEmail('');
            setRegisterPassword('');
            setRegisterName('');
          });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <form className="login--form">
        <div className="login--group">
          <h3 className="login--title">Sign In</h3>

          <input
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            placeholder="Email"
            className="login--email"
            required
          />
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            placeholder="Password"
            className="login--password"
            required
          />
          <button type="submit" className="login--button" onClick={loginToApp}>
            Sign In
          </button>
        </div>
      </form>

      <form className="register--form">
        <div className="register--group">
          <h3 className="register--title">Register</h3>
          <input
            type="text"
            placeholder="Full Name"
            value={registerName}
            onChange={(e) => setRegisterName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="register--email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="register--password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button type="submit" className="register--button" onClick={register}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
