import React from 'react';
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import img from '../../asset/banar-asset/wp4759222.jpg'
import './Extra.css'

const Extra = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div className="body1">
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Extra;