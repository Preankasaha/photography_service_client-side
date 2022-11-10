import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ServiceReviews from '../ServiceReviews/ServiceReviews';

const ReadReview = ({ id }) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceID=${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [id])
    console.log(reviews);
    return (
        <div>
            <h1 className='text-5xl'>review: {reviews.length}</h1>
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