import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './MainNavber.css'
import img from '../../../asset/banar-asset/wp4759222.jpg'

const MainNavber = () => {
    return (
        <div id='show_bg_2'>
            <div className='frist-box'>
                <Link to='/'><FaAngleLeft /></Link>
            </div>
            <div className='second_box'>
                <h1>Welcome to Photograpy</h1>
                <ul>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/services'>Servic</Link>
                    </li>
                    <li>
                        <Link to='/reviw'>Reviw</Link>
                    </li>
                    <li>
                        <Link>Abmin</Link>
                    </li>
                </ul>
            </div>
            <div className='thard-box'>
                <div className='container'>
                    <img src={img} alt="" />
                    <button className='btn'><Link id='explor-btn' to='/explor'>Explor</Link></button>
                </div>
            </div>
        </div>
    );
};

export default MainNavber;