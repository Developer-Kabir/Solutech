import React from 'react';
import BusinessDevelopment from './BusinessDevelopment';
import CCTV from './CCTV';
import Counter2 from './Counter2';
import FAQ2 from './FAQ2';
import ServiceDetail from './ServiceDetail';
import SoftwareSolution from './SoftwareSolution';

const Service = () => {
    return (
        <div>
            <ServiceDetail></ServiceDetail>
            <CCTV></CCTV>
            <SoftwareSolution></SoftwareSolution>
            <BusinessDevelopment></BusinessDevelopment>
            <Counter2></Counter2>
            <FAQ2></FAQ2>
        </div>
    );
};

export default Service;