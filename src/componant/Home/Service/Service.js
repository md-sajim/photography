import React from "react";
import { Link } from "react-router-dom";
import img from '../../../asset/banar-asset/wp4759222.jpg'
import aniimg from '../../../asset/banar-asset/animation_img/brooke-cagle-emlKHDEydhg-unsplash.jpg'
import aniimg2 from '../../../asset/banar-asset/animation_img/jon-ly-ADBOC3UP4eQ-unsplash.jpg'
import imgcard1 from '../../../asset/banar-asset/servicw-img/marriage.jpg'
import imgcard2 from '../../../asset/banar-asset/servicw-img/FLORAL-PHOTOGRAPHY.jpg'
import imgcard3 from '../../../asset/banar-asset/servicw-img/FOODandDRINK.jpg'

import "./Service.css"

const Service = () => {
    const arra = [
        { id: 1, img: imgcard1, name: "ADVERTISTNG PHOTOGRAPY", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eaque quisquam odit, blanditiis atque non?", price: 450 },
        { id: 2, img: imgcard2, name: "FLORAL PHOTOGRAPY", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eaque quisquam odit, blanditiis atque non?", price: 450 },
        { id: 3, img: imgcard3, name: "FOOD & DRINK PHOTOGRAPY", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita eaque quisquam odit, blanditiis atque non?", price: 450 }
    ];


    return (
        <div className="servic-container">

            <div className="header__frams">
                <div className="header__fram">
                    <img src={aniimg} alt="" />
                </div>
                <div className="header__fram">
                    <img src={aniimg2} alt="" />
                </div>
            </div>
            <div className="servic-body">
                <div className="service-grid">

                    {
                        arra.map((servis) => <div
                            key={servis.id}
                            className="service-grid-item">
                            {console.log(servis.id)}
                            <div className="service-card">
                                <img style={{ height: "350px" }} src={servis.img} alt="" className="service-card-img" />
                                <div style={{ backgroundColor: "#8AA1B1" }} className="service-card-content">
                                    <h1 className="service-card-header">{servis.name}</h1>
                                    <p className="service-card-text">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ratione quia deleniti harum ipsum ullam veniam.
                                    </p>
                                    <h5 className="ms-2 mb-2">{servis.price}$</h5>

                                    <Link to='/servicesDetails' className="service-card-btn">Visit<span>&rarr;</span></Link>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
            <div style={{ backgroundColor: "#002431", border: "none", paddingBottom: "100px" }} className='d-flex justify-content-center'>
                <button class="custom-btn btn-12"><span><Link to='/services'>Click!</Link></span><span>See All</span></button>
            </div>
        </div>
    );
};

export default Service;