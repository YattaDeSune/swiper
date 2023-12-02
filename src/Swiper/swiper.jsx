import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Swiper.css'

const SwiperRow = (props) => {

    const dir = props.dir
    const speed = props.speed
    const icon1 = props.icon1
    const icon2 = props.icon2
    const icon3 = props.icon3
    const icon4 = props.icon4

    return (
        <Swiper
            dir={dir}
            style={{ marginBottom: "3vw" }}
            speed={speed}
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            allowTouchMove={false}
        >
            <SwiperSlide>
                <div className='row'>
                    <img src={icon1} alt=''></img>
                    <img src={icon2} alt=''></img>
                    <img src={icon3} alt=''></img>
                    <img src={icon4} alt=''></img>

                    <img src={icon1} alt=''></img>
                    <img src={icon2} alt=''></img>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='row'>
                    <img src={icon3} alt=''></img>
                    <img src={icon4} alt=''></img>

                    <img src={icon1} alt=''></img>
                    <img src={icon2} alt=''></img>
                    <img src={icon3} alt=''></img>
                    <img src={icon4} alt=''></img>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};


export {SwiperRow} ;