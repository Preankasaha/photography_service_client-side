import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetailsCard = () => {
    const { title, img, description, price, duration, photos, retouch, print } = useLoaderData();
    return (
        <div data-theme='night' className="hero min-h-screen bg-base-200">
            <div >
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{description}</p>
                        <div className='flex gap-2'>
                            <div className='flex gap-4'>
                                <span className="py-6">Duration: {duration}</span>
                                <span className="py-6">Price: ${price}</span>
                                <span className="py-6">Photos: {photos}</span>
                                <span className="py-6">Retouch: {retouch}</span>
                                <span className="py-6">Print: {print}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsCard;