import React from 'react';

const ServiceReviews = ({ review }) => {
    console.log(review);
    const { name, serviceName, message } = review.review;

    return (
        <div>
            <h2 className='text-white text-5xl'>Service: {name}</h2>
            <h2 className='text-white text-5xl'>Reviewer's Name:{name}</h2>
            <p className='text-white text-5xl'>{message}</p>

        </div>
    );
};

export default ServiceReviews;