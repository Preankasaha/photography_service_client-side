import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ReadReview from '../../Private/Review/ReadReview/ReadReview';
import Review from '../../Private/Review/ReadReview/ReadReview';
import ReviewForm from '../../Private/Review/ReviewForm';
import ServiceReviews from '../../Private/Review/ServiceReviews/ServiceReviews';

const ServiceDetailsCard = () => {
    const { _id, title, img, description, price, duration, photos, retouch, print } = useLoaderData();
    const { user } = useContext(AuthContext);

    return (
        <div>

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
            {/* Review section */}
            <div className='bg-fuchsia-900'>
                <div className='glass p-8 my-8'>
                    <h2 className='text-5xl text-white text-center font-bold pb-4'>Review Section: {title}</h2>
                    <p className='text-xl text-white'>Please give your review, whether positive or negetive, regaring my service. You are highly recommended to remain true to your feeling ragarding my service. Your valuable review help me to enhance the quality of my service.</p>

                    <ReadReview id={_id}></ReadReview>

                    <div className='flex justify-end mr-8 mb-4'>

                        {
                            user?.uid ?
                                <Link to={`/checkout/${_id}`} className="btn btn-accent text-xl font-bold glass">Add Your Review</Link>
                                :
                                <>
                                    <label to={`/checkout/${_id}`} htmlFor="my-modal-5" className="btn btn-accent glass text-xl font-bold">Add Your Review</label>

                                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                                    <div className="modal">
                                        <div className="modal-box w-11/12 max-w-5xl">
                                            <p className="py-4">Please login to add a review.</p>
                                            <div className="modal-action">
                                                <Link to={`/checkout/${_id}`} htmlFor="my-modal-5" className="btn">Log In</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                        }
                    </div>
                </div>
                <ReviewForm></ReviewForm>
            </div>


        </div>
    );
};

export default ServiceDetailsCard;