import React from 'react';

import 'swiper/css';
import './Swiper/Swiper.css';
import {SwiperRow} from "./Swiper/Swiper";

import ReactIcon from './assets/images/react.svg'
import Redux from './assets/images/redux.svg'
import Python from './assets/images/python.svg'
import Redis from './assets/images/rediska.svg'
import ReactNative from './assets/images/react-native.svg'
import TS from './assets/images/ts.svg'
import NextJS from './assets/images/next-js.svg'
import Hz from './assets/images/hz-che-eto.svg'
import SQL from './assets/images/sql.svg'
import Django from './assets/images/django.svg'
import JS from './assets/images/js.svg'
import Docker from './assets/images/docker.svg'

const App = () => {
    return (
        <div className='container'>
            <p className='head'>
                Обладаем обширной эспертизой в современном технологическом стэке
            </p>
            <SwiperRow dir='rtl' speed={15000} icon1={ReactIcon} icon2={Redux} icon3={Python} icon4={Redis}/>
            <SwiperRow dir='ltr' speed={13000} icon1={ReactNative} icon2={TS} icon3={NextJS} icon4={Hz}/>
            <SwiperRow dir='rtl' speed={11000} icon1={SQL} icon2={Django} icon3={JS} icon4={Docker}/>
        </div>
    );
}

export default App;