import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyReviewDetails = ({ myreview, handleDelete }) => {
    const { name, message, serviceName } = myreview.review;
    const { _id } = myreview;
    const { user } = useContext(AuthContext);




    return (
        <div className='my-8 rounded-2xl text-white' data-theme='night'>

            <div className="card bg-fuchsia-900 glass w-full bg-base-100 shadow-xl">
                {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">Your review</h2>
                    <p className='text-xl'>You said:</p>
                    <p className='text-2xl'>{message}</p>
                    <div className="card-actions justify-end">
                        {/* <Link to={`/reviewsupdate/${_id}`}> <button className='btn glass'>Update</button> </Link> */}

                    </div>

                </div>

                <button onClick={() => handleDelete(_id)} className="btn glass">Delete</button>





                {/* The button to open modal */}


                {/* Put this part before </body> tag */}


                {/* <form onSubmit={handleSubmit} className="card-body rounded-xl glass">

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
                    <input name='email' type="text" defaultValue={user?.email}             placeholder="Your email" className="input input-bordered w-full" readOnly />
                </div>
                <div className="form-control">
                    <textarea name='message' className="textarea textarea-bordered w-full" placeholder="Your review"></textarea>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary glass">Update Your Review</button>

                </div>
                </form> */}

            </div>


        </div>
    );
};

export default MyReviewDetails;