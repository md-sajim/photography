import React from 'react';
import { FaGithub, FaGooglePlusG, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='login-main-body'>
            <div id='login-home-icon'>
                <Link to='/'><FaHome /></Link>
            </div>
            <div className='login-body'>
                <div>
                    <h1>Login</h1>
                    <p id='account'>Have an account?</p>
                    <div className='input'>
                        <input placeholder='Enter your email' type="text" />
                        <input placeholder='Password' type="text" />
                        <button type="submit">Login now</button>
                    </div>

                    <div id='remember-me'>
                        <div><input type="checkbox" /><label htmlFor="">Remmeber me</label></div>
                        <p>Forgot Password?</p>
                    </div>
                    <p id='or-sing'>- Or Sing With -</p>
                    <div>
                        <button><FaGooglePlusG /></button>
                        <button><FaGithub /></button>
                    </div>
                    <div id='member'>
                        <p>Not a member? <Link to='/register'>Sign Up.</Link></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;