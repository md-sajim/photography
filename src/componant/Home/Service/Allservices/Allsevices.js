import React, { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ContactMe from '../../../ContactMe/ContactMe';
import img from '../../../../asset/banar-asset/explor-weding.jpg'
import './Allservices.css'
import Carousel from 'react-bootstrap/Carousel';
import marrige from '../../../../asset/banar-asset/wading-img.webp'
import event from '../../../../asset/banar-asset/event.jpg'
import socalMidea from '../../../../asset/banar-asset/socail-midea.jpg'
import foodAndDrink from '../../../../asset/banar-asset/foodanddring.jpg'


const Allsevices = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <div style={{ backgroundColor: "#002431" }}>
            <Carousel id='caroso-items' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        style={{ height: "60vh" }}
                        className="d-block w-80"
                        src={marrige}
                        alt="First slide"
                    />

                    <Carousel.Caption className='img-caption'>
                        <h1>Marrige</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "550px" }}
                        className="d-block w-80"
                        src={event}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='img-caption'>
                        <h1>Event</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "550px" }}
                        className="d-block w-80"
                        src={socalMidea}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='img-caption'>
                        <h1>Social Media</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "550px" }}
                        className="d-block w-80"
                        src={foodAndDrink}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='img-caption'>
                        <h1>Food & Drink</h1>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="allservices-container" >
                <div className="servic-body">
                    <div className="service-grid">
                        {
                            [...Array(6)].map((_, i) => <div
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                className="service-grid-item">
                                <div className="service-card">
                                    <img src={img} alt="" className="service-card-img" />
                                    <div className="service-card-content">
                                        <h1 className="service-card-header">Rome</h1>
                                        <p className="service-card-text">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ratione quia deleniti harum ipsum ullam veniam blanditiis repudiandae impedit molestiae cum optio, eligendi mollitia. Accusantium.
                                        </p>
                                        <h5 className="ms-2 mb-2">400$</h5>
                                        <Link to='/servicesDetails' className="service-card-btn">Visit <span>&rarr;</span></Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Allsevices;