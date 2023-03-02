import React from 'react';
import SubNavber from '../Navber/SubNavber/SubNavber'
import './Explor.css'
import img from '../../asset/banar-asset/wading-img.webp'
import img1 from '../../asset/banar-asset/foodanddring.jpg'
import img2 from '../../asset/banar-asset/loginbg.jpg'
import img3 from '../../asset/banar-asset/event.jpg'
import ContactMe from '../ContactMe/ContactMe';
import { FaCloudDownloadAlt, FaHardHat, FaHeart, FaRegSave } from
    'react-icons/fa';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Explor = () => {
    const placement = 'top'
    const arrimg1 = [img, img1, img3, img, img2]
    const arrimg2 = [img3, img2, img, img3, img2]
    const arrimg3 = [img2, img1, img3, img, img2]
    return (
        <div style={{ backgroundColor: "#002431" }}>
            <div id='explor-container'>
                <div>
                    <h1>Creative Photography <br /> Studio</h1>
                    <p>Find the perfect photos for any project</p>
                    <div>
                        <input type="text" placeholder='Search the perfect photos' />
                        <button>SEARCH</button>
                    </div>
                </div>
            </div>
            <div className='explor-grid'>
                <div className='overflow-hedin'>
                    {
                        arrimg1.map((id, imgdisply) => <div
                            key={id}
                            className='img-container'
                            data-aos="fade-up"
                            data-aos-duration="3000"
                        >
                            <img src={id} alt="" />
                            <div class="bottom-left">
                                <OverlayTrigger
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        <Tooltip id={`tooltip-${placement}`}>
                                            <strong>Save</strong>
                                        </Tooltip>
                                    }
                                >
                                    <button className='img-icon'>
                                        <FaRegSave />
                                    </button>

                                </OverlayTrigger>

                            </div>

                            <div class="top-right">
                                <FaHeart />
                            </div>
                            <div class="bottom-right">
                                <OverlayTrigger
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        <Tooltip id={`tooltip-${placement}`}><strong>Download</strong>
                                        </Tooltip>
                                    }
                                >
                                    <button className='img-icon'>
                                        <FaCloudDownloadAlt />
                                    </button>

                                </OverlayTrigger>

                            </div>

                        </div>)
                    }
                </div>
                <div className='overflow-hedin'>
                    {
                        arrimg2.map((id, imgdisply) => <div
                            key={id}
                            className='img-container'
                            data-aos="fade-up"
                            data-aos-duration="3000"
                        >
                            <img src={id} alt="" />
                            <div class="bottom-left">
                                <OverlayTrigger
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        <Tooltip id={`tooltip-${placement}`}>
                                            <strong>Save</strong>
                                        </Tooltip>
                                    }
                                >
                                    <button className='img-icon'>
                                        <FaRegSave />
                                    </button>

                                </OverlayTrigger>

                            </div>

                            <div class="top-right">
                                <FaHeart />
                            </div>
                            <div class="bottom-right">
                                <OverlayTrigger
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        <Tooltip id={`tooltip-${placement}`}><strong>Download</strong>
                                        </Tooltip>
                                    }
                                >
                                    <button className='img-icon'>
                                        <FaCloudDownloadAlt />
                                    </button>

                                </OverlayTrigger>

                            </div>
                        </div>)
                    }
                </div>
                <div className='overflow-hedin'>
                    {
                        arrimg3.map((id, imgdisply) => <div
                            key={id}
                            className='img-container'
                            data-aos="fade-up"
                            data-aos-duration="3000">
                            <img src={id} alt="" />
                            <div class="bottom-left">
                                <OverlayTrigger
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        <Tooltip id={`tooltip-${placement}`}>
                                            <strong>Save</strong>
                                        </Tooltip>
                                    }
                                >
                                    <button className='img-icon'>
                                        <FaRegSave />
                                    </button>

                                </OverlayTrigger>

                            </div>

                            <div class="top-right">
                                <FaHeart />
                            </div>
                            <div class="bottom-right">
                                <OverlayTrigger
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        <Tooltip id={`tooltip-${placement}`}><strong>Download</strong>
                                        </Tooltip>
                                    }
                                >
                                    <button className='img-icon'>
                                        <FaCloudDownloadAlt />
                                    </button>

                                </OverlayTrigger>

                            </div>
                        </div>)
                    }
                </div>



            </div>
            <ContactMe></ContactMe>
        </div>

    );
};

export default Explor;