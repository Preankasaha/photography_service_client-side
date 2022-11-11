import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewDetails = ({ myreview, handleUpdate, handleDelete }) => {
    const { name, message, serviceName } = myreview.review;
    const { _id } = myreview;
    return (
        <div className='my-8 rounded-2xl text-white' data-theme='night'>

            <div className="card bg-fuchsia-900 glass w-full bg-base-100 shadow-xl">
                {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">Your review</h2>
                    <p className='text-xl'>You said:</p>
                    <p className='text-2xl'>{message}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/reviewsupdate/${_id}`}> <button className='btn glass'>Update</button> </Link>
                        <button onClick={() => handleDelete(_id)} className="btn glass">Delete</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyReviewDetails;