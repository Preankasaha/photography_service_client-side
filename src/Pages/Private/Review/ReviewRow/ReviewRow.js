import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, email, name, message, serviceID, status } = review;
    console.log(review);
    const [reviewinfo, setReviewInfo] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceID}`)
            .then(res => res.json())
            .then(data => setReviewInfo(data));
    }, [serviceID])


    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
            </th>
            <td>
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="text-sm opacity-50">{serviceName}</div>
                        <div className="font-bold">{message}</div>
                        <div className="text-sm opacity-50">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">{ }</span>
            </td>
            <td>Purple</td>
            <th>
                <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
        </tr>
    );
};

export default ReviewRow;