import React, { Component, useRef } from 'react';
import * as ReactDOM from 'react-dom';
import './ServiceDetail.css'
import img from '../../asset/banar-asset/wp4759222.jpg'
import { FaCheckCircle, FaRegStar, FaStar, FaStarHalf, IconName } from "react-icons/fa";
import ContactMe from '../ContactMe/ContactMe';
import { Link } from 'react-router-dom';


const ServiceDetail = () => {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");


        if (slides && dots && captionText) {
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            captionText.innerHTML = dots[slideIndex - 1].alt;
        }
    }


    return (
        <div className='service-full-body'>
            <div className='serviceDetails-maincontainer p-5'>
                <div className='service-container-body'>
                    <div className="servic-detais-container">
                        <div className="mySlides">
                            <div className="numbertext">1 / 6</div>
                            <img alt='' src={img} style={{ width: "100%" }} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">2 / 6</div>
                            <img alt='' src={img} style={{ width: "100%" }} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">3 / 6</div>
                            <img alt='' src={img} style={{ width: "100%" }} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">4 / 6</div>
                            <img alt='' src={img} style={{ width: "100%" }} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">5 / 6</div>
                            <img alt='' src={img} style={{ width: "100%" }} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">6 / 6</div>
                            <img alt='img' src={img} style={{ width: "100%" }} />
                        </div>



                        <div className="caption-container">
                            <p id="caption"></p>
                        </div>

                        <div className="servic-row">
                            <div className="servic-column">
                                <img className="demo cursor" src={img} style={{ width: "100%" }}
                                    onClick={() => currentSlide(1)} alt="The Woods" />
                            </div>
                            <div className="servic-column">
                                <img className="demo cursor" src={img} style={{ width: "100%" }} onClick={() => currentSlide(2)} alt="Cinque Terre" />
                            </div>
                            <div className="servic-column">
                                <img className="demo cursor" src={img} style={{ width: "100%" }} onClick={() => currentSlide(3)} alt="Mountains and fjords" />
                            </div>
                            <div className="servic-column">
                                <img className="demo cursor" src={img} style={{ width: "100%" }} onClick={() => currentSlide(4)} alt="Northern Lights" />
                            </div>
                            <div className="servic-column">
                                <img className="demo cursor" src={img} style={{ width: "100%" }} onClick={() => currentSlide(5)} alt="Nature and sunrise" />
                            </div>
                            <div className="servic-column">
                                <img className="demo cursor" src={img} style={{ width: "100%" }} onClick={() => currentSlide(6)} alt="Snowy Mountains" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id='detais-header' className='pt-3 ms-5 text-white'>
                    <h1 >Service name</h1>
                    <div id='star-icon'>
                        {[...Array(5)].map((_, id) => <FaRegStar></FaRegStar>)}
                        <p>Price: 500$</p>
                    </div>
                    <h2>About This Service</h2>

                    <p id='detais-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore ratione perspiciatis delectus, modi maiores nam laboriosam mollitia fuga repudiandae, saepe et amet. Commodi, et aut! Dolores adipisci corrupti eius voluptatibus molestias error, nam quisquam?</p>
                    <div>
                        <div className='d-flex justify-content-start align-self-center service-icon'>
                            <FaCheckCircle className='icon-style' /> <p>Time: 24/7</p>
                        </div>
                        <div className='d-flex justify-content-start align-self-center service-icon'>
                            <FaCheckCircle className='icon-style' /> <p>Dalybary: 5 days</p>
                        </div>
                        <div className='d-flex justify-content-start align-self-center service-icon'>
                            <FaCheckCircle className='icon-style' /> <p>Odieo / Video / Photo</p>
                        </div>
                        <div className='d-flex justify-content-start align-self-center service-icon'>
                            <FaCheckCircle className='icon-style' /> <p>Personal / event</p>
                        </div>
                    </div>
                    <div id='details-btn'>
                        <button>BOOk NOW</button>
                    </div>
                </div>
            </div>
            {/* reviw section */}
            <div style={{color:"#BFC0BF"}} className='reviw-body'>
                <div >
                    <div className="row justify-content-center">
                        <div style={{ backgroundColor: "#002431" }} className="col-xl-10 col-lg-10 col-md-10 col-12  mb-5">
                            <div style={{ backgroundColor: "#002431" }} className="card">
                                <div className="row justify-content-left d-flex">
                                    <div className="col-md-4 d-flex flex-column text-center">
                                        <div className="rating-box">
                                            <h1 className="pt-4">4.0</h1>
                                            <p className="">out of 5</p>
                                        </div>
                                        <div className='text-warning h3'>
                                            <FaStar className='mx-1'></FaStar>
                                            <FaStar className='mx-1'></FaStar>
                                            <FaStar className='mx-1'></FaStar>
                                            <FaStar className='mx-1'></FaStar>
                                            <FaStarHalf className='mx-1'></FaStarHalf>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="rating-bar0 justify-content-center">
                                            <table className="text-left mx-auto">
                                                <tr>
                                                    <td className="rating-label">Excellent</td>
                                                    <td className="rating-bar">
                                                        <div className="bar-container">
                                                            <div className="bar-5"></div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">123</td>
                                                </tr>
                                                <tr>
                                                    <td className="rating-label">Good</td>
                                                    <td className="rating-bar">
                                                        <div className="bar-container">
                                                            <div className="bar-4"></div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">23</td>
                                                </tr>
                                                <tr>
                                                    <td className="rating-label">Average</td>
                                                    <td className="rating-bar">
                                                        <div className="bar-container">
                                                            <div className="bar-3"></div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">10</td>
                                                </tr>
                                                <tr>
                                                    <td className="rating-label">Poor</td>
                                                    <td className="rating-bar">
                                                        <div className="bar-container">
                                                            <div className="bar-2"></div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">3</td>
                                                </tr>
                                                <tr>
                                                    <td className="rating-label">Terrible</td>
                                                    <td className="rating-bar">
                                                        <div className="bar-container">
                                                            <div className="bar-1"></div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right">0</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ backgroundColor: "#002431" }} className="card">

                                {[...Array(10)].map((_, i) =>
                                    <div>
                                        <div className="row d-flex">
                                            <div className="unlike vote"> <img style={{ height: "90px", width: "90px" }} alt='' className="profile-pic" src="https://i.imgur.com/V3ICjlm.jpg" /> </div>
                                            <div className="d-flex flex-column">
                                                <h3 className="mt-2 mb-0">Mukesh Kumar</h3>
                                                <div>
                                                    <p className="text-left"><span className="text-muted mx-1">4.0</span>
                                                        <FaStar className='mx-1 text-warning h4'></FaStar>
                                                        <FaStar className='mx-1 text-warning h4'></FaStar>
                                                        <FaStar className='mx-1 text-warning h4'></FaStar>
                                                        <FaStar className='mx-1 text-warning h4'></FaStar>
                                                        <FaStarHalf className='mx-1 text-warning h4'></FaStarHalf></p>
                                                </div>
                                            </div>
                                            <div className="ml-auto">
                                                <p className="text-muted pt-5 pt-sm-3">10 Sept</p>
                                            </div>
                                        </div>
                                        <div className="row text-left">
                                            <h4 className="blue-text mt-3">"An awesome activity to experience"</h4>
                                            <p className="content">If you really enjoy spending your vacation 'on water' or would like to try something new and exciting for the first time.</p>
                                        </div>

                                        <div className="d-flex text-left mt-4">
                                            <div className="like mr-3 vote mx-1"> <img alt='' src="https://i.imgur.com/mHSQOaX.png" /><span className="blue-text pl-2">20</span> </div>
                                            <div className="unlike vote"> <img alt='' src="https://i.imgur.com/bFBO3J7.png" /><span className="text-muted pl-2">4</span> </div>
                                        </div>
                                    </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactMe></ContactMe>
        </div>
    );
};

export default ServiceDetail;