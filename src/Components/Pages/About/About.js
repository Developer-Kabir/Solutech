import React from 'react';
import AboutBanner from './AboutBanner';
import AboutService from './AboutService';
import Counter from './Counter';
import DiscoverWorld from './DiscoverWorld';
import FAQ from './FAQ';
import Ourmember from './Ourmember';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <DiscoverWorld></DiscoverWorld>
            <AboutService></AboutService>
            <Ourmember></Ourmember>
            <Counter></Counter>
            <FAQ></FAQ>
        </div>
    );
};

export default About;