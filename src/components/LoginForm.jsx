import { useLoginMutation } from "../services/apis/userApi";
import { setIsConnected } from "../app/authSlice";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const loginFormData = useRef(null);
    const [login] = useLoginMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(loginFormData.current);
        const data = Object.fromEntries(formData);

        try {
          const res = await login(data).unwrap();
          dispatch(setIsConnected({ token: res.body.token, rememberMe: data['remember-me'] }));
          navigate('/user');
        } catch (err) {
          setError(err.data.message);
        }
    }

  return (
    <form ref={loginFormData} onSubmit={onSubmit}>
      <span className="error" color="red">{error}</span>
      <div className="input-wrapper">
        <label htmlFor="email">Username</label>
        <input type="text" id="email" name="email"/> {/* il faut mettre name pour que ce soit pris en compte dans useRef */}
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"/>
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" name="remember-me"/>
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">Sign In</button>
    </form>
  );
};
