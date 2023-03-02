import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight, FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import avatorimg from '../../asset/banar-asset/tastimonial/download.jpg'
import './Tastimonial.css'

const Tastimonial = () => {
    return (
        <div className='tastimonial-container p-5'>
            <h2>Customer <b>Testimonials</b></h2>
            <Carousel>
                <Carousel.Item className='pb-5'>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="testimonial">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
                            </div>
                            <div className="media">
                                <img src={avatorimg} className="mr-3" alt="" />
                                <div className="media-body">
                                    <div className="overview">
                                        <div className="name"><b>Paula Wilson</b></div>
                                        <div className="details">Media Analyst / SkyNet</div>
                                        <div className="star-rating">

                                            <ul className="list-inline">
                                                <li className="list-inline-item"><FaStar></FaStar></li>
                                                <li className="list-inline-item"><FaStar></FaStar></li>
                                                <li className="list-inline-item"><FaStar></FaStar></li>

                                                <li className="list-inline-item"><FaStarHalfAlt></FaStarHalfAlt></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="testimonial">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
                            </div>
                            <div className="media">
                                <img src={avatorimg} className="mr-3" alt="" />
                                <div className="media-body">
                                    <div className="overview">
                                        <div className="name"><b>Paula Wilson</b></div>
                                        <div className="details">Media Analyst / SkyNet</div>
                                        <div className="star-rating">

                                            <ul className="list-inline">
                                                <li className="list-inline-item"><FaStar></FaStar></li>
                                                <li className="list-inline-item"><FaStar></FaStar></li>
                                                <li className="list-inline-item"><FaStar></FaStar></li>

                                                <li className="list-inline-item"><FaStarHalfAlt></FaStarHalfAlt></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item className='pb-5'>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="testimonial">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
                            </div>
                            <div className="media">
                                <img src={avatorimg} className="mr-3" alt="" />
                                <div className="media-body">
                                    <div className="overview">
                                        <div className="name"><b>Paula Wilson</b></div>
                                        <div className="details">Media Analyst / SkyNet</div>
                                        <div className="star-rating">

                                            <ul className="list-inline">
                                                <li className="list-inline-item"><FaStar></FaStar></li>
                                                <li className="list-inline-item"><FaStar></FaStar></li>
                                                <li className="list-inline-item"><FaStar></FaStar></li>

                                                <li className="list-inline-item"><FaStarHalfAlt></FaStarHalfAlt></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="testimonial">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
                            </div>
                            <div className="media">
                                <img src={avatorimg} className="mr-3" alt="" />
                                <div className="media-body">
                                    <div className="overview">
                                        <div className="name"><b>Paula Wilson</b></div>
                                        <div className="details">Media Analyst / SkyNet</div>
                                        <div className="star-rating">

                                            <ul className="list-inline">
                                                <li className="list-inline-item"><FaStar></FaStar></li>
                                                <li className="list-inline-item"><FaStar></FaStar></li>
                                                <li className="list-inline-item"><FaStar></FaStar></li>

                                                <li className="list-inline-item"><FaStarHalfAlt></FaStarHalfAlt></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item className='pb-5'>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="testimonial">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
                            </div>
                            <div className="media">
                                <img src={avatorimg} className="mr-3" alt="" />
                                <div className="media-body">
                                    <div className="overview">
                                        <div className="name"><b>Paula Wilson</b></div>
                                        <div className="details">Media Analyst / SkyNet</div>
                                        <div className="star-rating">

                                            <ul className="list-inline">
                                                <li className="list-inline-item"><FaStar></FaStar></li>
                                                <li className="list-inline-item"><FaStar></FaStar></li>
                                                <li className="list-inline-item"><FaStar></FaStar></li>

                                                <li className="list-inline-item"><FaStarHalfAlt></FaStarHalfAlt></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="testimonial">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante.</p>
                            </div>
                            <div className="media">
                                <img src={avatorimg} className="mr-3" alt="" />
                                <div className="media-body">
                                    <div className="overview">
                                        <div className="name"><b>Paula Wilson</b></div>
                                        <div className="details">Media Analyst / SkyNet</div>
                                        <div className="star-rating">

                                            <ul className="list-inline">
                                                <li className="list-inline-item"><FaStar></FaStar></li>
                                                <li className="list-inline-item"><FaStar></FaStar></li>
                                                <li className="list-inline-item"><FaStar></FaStar></li>

                                                <li className="list-inline-item"><FaStarHalfAlt></FaStarHalfAlt></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Carousel.Item>
            </Carousel>

        </div >
    );
};

export default Tastimonial;