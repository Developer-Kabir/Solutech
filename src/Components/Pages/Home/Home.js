import React from 'react';
import AboutService from '../About/AboutService';
import DiscoverWorld from '../About/DiscoverWorld';
import PartnerBrand from '../About/PartnerBrand';
import Counter2 from '../Service/Counter2';
import Homebanner from './Homebanner';
import Homeblog from './Homeblog';
import OurHappyCustomer from './OurHappyCustomer';
import OurProvidedService from './OurProvidedService';
import Protection from './Protection';

const Home = () => {
    return (
        <div>
            <Homebanner></Homebanner>
            <Protection></Protection>
            <DiscoverWorld></DiscoverWorld>
            <AboutService></AboutService>
            <OurProvidedService></OurProvidedService>
            <OurHappyCustomer></OurHappyCustomer>
            <Counter2></Counter2>
            <PartnerBrand></PartnerBrand>
         <Homeblog></Homeblog>
        </div>
    );
};

export default Home;