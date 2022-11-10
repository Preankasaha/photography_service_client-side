import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import MyReviewDetails from './MyReviewDetails';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyreviews(data))
    }, [user?.email])

    useTitle('MyReviews')
    return (
        <div>
            {myreviews.length}
            {myreviews.map(myreview =><MyReviewDetails ></MyReviewDetails>)}
        </div>
    );
};

export default MyReview;