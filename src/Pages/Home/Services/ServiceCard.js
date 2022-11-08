import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    console.log(service);
    const { title, img, description, duration, price } = service;
    return (
        // <div className="hero-content flex-col lg:flex-row">
        //     <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
        //     <div>
        //         <h1 className="text-5xl font-bold">{title}</h1>
        //         <p className="py-6">{description}</p>
        //         <button className="btn btn-primary">Get Started</button>
        //     </div>
        // </div>

        <div className="card md:w-96 bg-base-800 shadow-xl hover:shadow-2xl shadow-fuchsia-300 hover:shadow-fuchsia-500 image-full border-none" >
            {/* data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" */}
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold tracking-wide">Service Title: {title}</h2>
                <p className='text-xl font-semibold '> Duration: {duration}</p>
                <p className='text-xl font-semibold '> Price: {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${service._id}`}><button className="btn btn-outline btn-accent glass ">Details</button></Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;