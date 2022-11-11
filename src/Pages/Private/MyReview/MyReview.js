import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import MyReviewDetails from './MyReviewDetails';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);

    useEffect(() => {
        fetch(`https://photo-artisan-server.vercel.app/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('photoToken')}`
            }
        })

            .then(res => res.json())
            .then(data => setMyreviews(data))
    }, [user?.email])
  
    useTitle('MyReviews')


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`https://photo-artisan-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        // alert('deleted successfully');
                        toast.success('deleted successfully');
                        const remaining = myreviews.filter(odr => odr._id !== id);
                        setMyreviews(remaining);
                    }
                })
        }
    }
    return (
        <div className='my-8'>

            {
                myreviews.length === 0 ?
                    <div className=' bg-slate-900 my-24'>
                        <h1 className='text-5xl text-center text-white font-extrabold p-14 glass'>NO REVIEWS WERE ADDED</h1>
                    </div>
                    :
                    <h1 className='text-5xl text-center text-slate-900'>Total Reviews {myreviews.length}</h1>
            } 


            {
                myreviews.map(myreview => <MyReviewDetails
                key={myreview._id}
                myreview={myreview}
                handleDelete={handleDelete}
                ></MyReviewDetails>)
            }
            <ToastContainer />
        </div>
    );
};

export default MyReview;