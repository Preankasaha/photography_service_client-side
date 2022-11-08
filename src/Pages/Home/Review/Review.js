import React from 'react';

const Review = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Leave Your Review Here</h1>
                    <p className="py-6">You are always appreceated for giving your valuable opinion on any service provided by me</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-fuchsia-900">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your review</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Your Review"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn glass">Post Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;