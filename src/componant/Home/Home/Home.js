import React from 'react';
import ContactMe from '../../ContactMe/ContactMe';
import Extra from '../../Extra/Extra';
import Gallary from '../../Gallry/Gallary';
import Tastimonial from '../../Tastimonial/Tastimonial';
import Banar from '../Banar/Banar';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <Banar></Banar>
            {/* <Extra></Extra> */}
            <Service></Service>
            <Tastimonial></Tastimonial>
            <Gallary></Gallary>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;