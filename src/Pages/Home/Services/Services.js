import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ServiceSummaryCard from './ServiceSummaryCard';


const Services = () => {
    const [services, setServices] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true);
        fetch('http://localhost:5000/services')

            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoader(false)
            })

    }, [])

    //loader added
    if (loader) {
        return <progress className="progress w-full"></progress>
    }
    return (
        <div data-theme='night' >
            <h2 className='text-5xl text-center py-8'>PACKAGES FOR YOU</h2>
            <div className='grid gap-x-2 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10'>
                {
                    services.map(service => <ServiceSummaryCard
                        key={service._id}
                        service={service}
                    ></ServiceSummaryCard>)
                }
            </div>

        </div>
    );
};

export default Services;