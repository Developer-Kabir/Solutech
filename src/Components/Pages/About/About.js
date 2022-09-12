import React from 'react';
import AboutBanner from './AboutBanner';
import AboutService from './AboutService';
import Counter from './Counter';
import DiscoverWorld from './DiscoverWorld';
import FAQ from './FAQ';
import History from './History';
import Ourmember from './Ourmember';
import PartnerBrand from './PartnerBrand';
import Testiomonal from './Testiomonal';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <DiscoverWorld></DiscoverWorld>
            <AboutService></AboutService>
            <Counter></Counter>
            
            <FAQ></FAQ>
            <Testiomonal></Testiomonal>
            <PartnerBrand></PartnerBrand>
            <Ourmember></Ourmember>
            <History></History>
        </div>
    );
};

export default About;