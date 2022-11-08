import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div data-theme='night' >
            <h2 className='text-5xl text-center py-8'>PACKAGES FOR YOU</h2>
            <div className='grid gap-x-2 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;