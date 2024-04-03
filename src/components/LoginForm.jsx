import { useLoginMutation } from "../services/apis/userApi";
import { setIsConnected } from "../app/authSlice";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const loginFormData = useRef(null);
    const [login] = useLoginMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(loginFormData.current);
        const data = Object.fromEntries(formData);
        try {
          const res = await login(data).unwrap();
          dispatch(setIsConnected(res.body.token));
          navigate('/user');
        } catch (err) {
          console.log(err);
        }
    }

  return (
    <form ref={loginFormData} onSubmit={onSubmit}>
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
