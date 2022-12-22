import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceSummaryCard = ({ service }) => {

    const { title, img, description, duration, price } = service;
    return (

        // summarycard
        <div className="card md:w-96 bg-base-100 shadow-xl hover:shadow-2xl shadow-fuchsia-300 hover:shadow-fuchsia-500 border-none glass">

            <PhotoProvider>
                <PhotoView src={img}>
                    <figure className="px-10 pt-10">
                        <img src={img} alt={title} className="rounded-xl" />
                    </figure>
                </PhotoView>
            </PhotoProvider>


            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl font-semibold '>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                <p className='text-xl font-semibold '> Duration: {duration}</p>
                <p className='text-xl font-semibold '> Price: {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${service._id}`}><button className="btn btn-outline btn-accent glass ">Details</button></Link>
                </div>
            </div>
        </div>



    );
};

export default ServiceSummaryCard;