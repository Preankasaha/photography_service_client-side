import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ServiceReviews from '../ServiceReviews/ServiceReviews';

const ReadReview = ({ id }) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://photo-artisan-server.vercel.app/reviews?serviceID=${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [id])
 
    return (
        <div className='my-14'>

            <h1 className='text-5xl text-center text-white'>Total Reviews: {reviews.length}</h1>
            {
                reviews.map(review => <ServiceReviews
                    key={review._id}
                    review={review}
                ></ServiceReviews>)
            }


        </div>
    );
};

export default ReadReview;