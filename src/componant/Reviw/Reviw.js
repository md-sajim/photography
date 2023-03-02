import React from 'react';
import { FaArrowCircleLeft, FaEye, FaGlassWhiskey, FaHeart, FaRegCommentDots, FaRegSmileBeam, FaRegWindowClose } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import './Reviw.css'

const Reviw = () => {
    return (
        <div className='reviw-container container'>
            <div id='reviw-sub-container-main'>
                <div>
                    <h1>Photography</h1>
                    <div id='reviw-items'>
                        <ul>
                            <li><FaRegSmileBeam /><Link to='/reviw'>Manage My Account</Link></li>
                            <li><FaGlassWhiskey /><Link to='/reviw/order'>My Orders</Link></li>
                            <li><FaEye /><Link to='/reviw/wishlist'>My Wishlist</Link></li>
                            <li><FaRegCommentDots /><Link to='/reviw/likecommint'>Like & Commint</Link></li>
                            <li><FaHeart /><Link to='/reviw/reviews'>My Reviews</Link></li>
                            <li><FaRegWindowClose /><Link to='/reviw/cancellation'>Cancellations</Link></li>
                            <li><FaArrowCircleLeft /><Link to='/navber'>Back</Link></li>
                            <li>Logout</li>
                        </ul>
                    </div>

                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Reviw;