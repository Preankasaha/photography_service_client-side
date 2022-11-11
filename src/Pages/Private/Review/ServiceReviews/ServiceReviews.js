import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const ServiceReviews = ({ review }) => {
   
    const { name, serviceName, message } = review.review;
    const { user } = useContext(AuthContext);
    return (


        <div className='my-8 rounded-2xl text-white'>

            <div className="card bg-slate-900 glass w-full bg-base-100 shadow-xl">
                {user?.photoURL ?
                    <div className="tooltip tooltip-left tooltip-accent" data-tip={user.displayName}>
                        <figure><img style={{ height: '30px' }} className='rounded-full mr-1' src={user?.photoURL} alt="" /></figure>
                    </div>

                    :
                    <FaUser></FaUser>
                }
                {/* <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure> */}
                <div className="card-body">

                    <h2 className='text-white text-2xl'>{name} said:</h2>
                    <p className='text-2xl'>{message}</p>
                </div>
            </div>





        </div>
    );
};

export default ServiceReviews;