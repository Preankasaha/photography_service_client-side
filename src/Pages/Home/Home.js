import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div data-theme='night'>
            <Banner />
            <Services />
            <Link to='/services' className='btn btn-accent glass w-1/2 mx-72 my-8'>View All</Link>
        </div>
    );
};

export default Home;