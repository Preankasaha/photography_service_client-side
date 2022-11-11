// import React from 'react';
// import { Link } from 'react-router-dom';
// import { PhotoProvider, PhotoView } from 'react-photo-view';
// import 'react-photo-view/dist/react-photo-view.css';

// const ServiceLimitSummary = ({ service }) => {
//     console.log(service);
//     const { title, img, description, duration, price } = service;
//     return (

//         <div className="card glass sm:w-48 md:w-96 bg-base-800 shadow-xl sm:mx-0 sm:my-5 hover:shadow-2xl shadow-fuchsia-300 hover:shadow-fuchsia-500 image-full border-none" >
            
//             <PhotoProvider>
//                 <PhotoView src={img}>
//                     <img src={img} alt="" />
//                 </PhotoView>
//             </PhotoProvider>

//             <div className="card-body">
//                 <h2 className="card-title text-2xl font-bold tracking-wide">{title}</h2>
//                 <p className='text-xl font-semibold '>{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
//                 <p className='text-xl font-semibold '> Duration: {duration}</p>
//                 <p className='text-xl font-semibold '> Price: {price}</p>
//                 <div className="card-actions justify-end">
//                     <Link to={`/services/${service._id}`}><button className="btn btn-outline btn-accent glass ">Details</button></Link>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ServiceLimitSummary;