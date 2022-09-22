import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Carousel from './Carousel/Carousel';
import HomePServices from './HomePageServices/HomePServices';
import CoreValue from './OurCoreValue/CoreValue';


const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Carousel></Carousel>
            <CoreValue></CoreValue>
            <HomePServices></HomePServices>
            {/* <Test></Test> */}
        </div>
    );
};

export default Home;