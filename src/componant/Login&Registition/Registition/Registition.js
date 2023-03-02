import React from 'react';
import { FaGithub, FaGooglePlusG, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Registition.css'

const Registition = () => {
    return (
        <div className='registar-main-body'>
            <div id='registar-home-icon'>
                <Link to='/'><FaHome /></Link>
            </div>
            <div className='registar-body'>
                <div>
                    <h1>Registrar</h1>
                    <p id='account'>Have no account?</p>
                    <div className='input'>
                        <input placeholder='Enter your name' type="text" />
                        <input placeholder='Enter your email' type="email" />
                        <input placeholder='Password' type="password" />
                        <button type="submit">Login now</button>
                    </div>

                    <div id='remember-me'>
                        <div><input type="checkbox" /><label htmlFor="">Excapt trams and condition</label></div>

                    </div>
                    <p id='or-sing'>- Or Sing With -</p>
                    <div>
                        <button><FaGooglePlusG /></button>
                        <button><FaGithub /></button>
                    </div>
                    <div id='member'>
                        <p>Alray a member? <Link to='/login'>Login Now.</Link></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Registition;