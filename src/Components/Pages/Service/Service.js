import React from 'react';
import CCTV from './CCTV';
import ServiceDetail from './ServiceDetail';
import SoftwareSolution from './SoftwareSolution';

const Service = () => {
    return (
        <div>
            <ServiceDetail></ServiceDetail>
            <CCTV></CCTV>
            <SoftwareSolution></SoftwareSolution>
        </div>
    );
};

export default Service;