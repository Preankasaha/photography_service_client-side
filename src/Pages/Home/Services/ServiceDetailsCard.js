import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ServiceDetailsCard = () => {
    const { title, img, description, price, duration, photos, retouch, print } = useLoaderData();
    const { user } = useContext(AuthContext);
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
                <div className='flex justify-end mr-8 mb-4'>

                    {
                        user?.uid ?
                            <Link to="/review" className="btn btn-outline btn-accent text-xl font-bold glass">Add Your Review</Link>
                            :
                            <>
                                <label to='/review' htmlFor="my-modal-5" className="btn btn-outline btn-accent  text-xl font-bold glass">Add Your Review</label>

                                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl">
                                        <p className="py-4">Please login to add a review.</p>
                                        <div className="modal-action">
                                            <Link to="/review" htmlFor="my-modal-5" className="btn">Log In</Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsCard;