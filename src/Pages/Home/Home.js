import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from './Banner/Banner';
import Gallery from './Text/Gallery';

// import Services from './Services/Services';
import ServiceSummaryCard from './Services/ServiceSummaryCard';


const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/serviceswithlimit')

            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    useTitle('Photo Artisan')
    return (
        <div data-theme='night'>
            <Banner />

            <div className='grid gap-x-2 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceSummaryCard key={service.Id} service={service}
                    ></ServiceSummaryCard>)
                }
            </div>


            <Link to='/services' className='btn btn-accent glass w-1/2 mx-72 my-8'>View All</Link>

            <Gallery />

        </div>
    );
};

export default Home;