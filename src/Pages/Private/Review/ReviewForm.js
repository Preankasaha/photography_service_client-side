import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ReviewForm = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(user);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const review = {
            serviceID: _id,
            serviceName: title,
            name,
            email,
            message,


        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Thanks for your review')
                    form.reset();

                }
            })

            .catch(error => console.error(error));

    }

    return (
        <div className="hero min-h-screen bg-fuchsia-900">

            <div className="hero-content flex-col lg:flex-row glass">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Leave Your Review Here</h1>
                    <p className="py-6">You are always appreceated for giving your valuable opinion on any service provided by me</p>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl" data-theme='night'>
                    <form onSubmit={handleReview} className="card-body rounded-xl glass">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" defaultValue={user?.email} placeholder="Your email" className="input input-bordered w-full" readOnly />
                        </div>
                        <div className="form-control">
                            <textarea name='message' className="textarea textarea-bordered w-full" placeholder="Your review"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn glass">Place Your Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    )
};

export default ReviewForm;