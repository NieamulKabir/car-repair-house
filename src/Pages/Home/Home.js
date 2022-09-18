import React from 'react';
import Carousel from './Carousel/Carousel';
import HomePServices from './HomePageServices/HomePServices';
import CoreValue from './OurCoreValue/CoreValue';
import Test from './Test';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <CoreValue></CoreValue>
            <HomePServices></HomePServices>
            {/* <Test></Test> */}
        </div>
    );
};

export default Home;