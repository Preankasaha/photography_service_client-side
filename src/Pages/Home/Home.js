import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from './Banner/Banner';
import Gallery from './Text/Gallery';

// import Services from './Services/Services';
import ServiceSummaryCard from './Services/ServiceSummaryCard';
import Aboutme from './Text/Aboutme';


const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://photo-artisan-server.vercel.app/serviceswithlimit')

            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    useTitle('Photo with Artisan')
    return (
        <div data-theme='night'>

            {/* //section under home component */}
            <Banner />
            <h2 className='text-5xl text-white text-center font-bold my-14'>Service Packages</h2>
            <div className='grid gap-x-2 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 mb-24'>

                {
                    services.map(service => <ServiceSummaryCard key={service.Id} service={service}
                    ></ServiceSummaryCard>)
                }
            </div>
            <Link to='/services' className='btn btn-accent glass w-1/2 mx-auto flex flex-row justify-center my-8'>View All</Link>
            <Aboutme />
            <Gallery />

        </div>
    );
};

export default Home;