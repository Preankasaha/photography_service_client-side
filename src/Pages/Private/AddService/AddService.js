// import React from 'react';
// import { Link } from 'react-router-dom';
// import useTitle from '../../../hooks/useTitle';

// const AddService = () => {
//     useTitle('AddService')

//     const handleSubmit = event => {
//         event.preventDefault();
//         const form = event.target;
//         const service_Id = form.service_Id.value;
//         const title = form.title.value;
//         const img = form.title.img;
//         const price = form.price.value;
//         const description = form.description.value;
//         const duration = form.duration.value;
//         const photos = form.photo.value;
//         const retouch = form.retouch.value;
//         const print = form.print.value;

//         const services = {
//             service_Id,
//             title,
//             img,
//             price,
//             description,
//             duration,
//             photos,
//             retouch,
//             print
//         }
//         fetch('http://localhost:5000/services', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(services)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 if (data.acknowledged) {
//                     alert('Thanks for adding services')
//                     form.reset();
//                 }
//             })

//             .catch(error => console.error(error));

//     }
//     return (
//         <div className="hero min-h-screen bg-fuchsia-900">

//             <div className="hero-content flex-col lg:flex-row glass">
//                 <div className="text-center lg:text-left">
//                     <h1 className="text-5xl font-bold">Add services from here!</h1>
//                     <p className="text-2xl font-semibold py-6">you may add services here if you like.</p>
//                 </div>

//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl" data-theme='night'>
//                     <form onSubmit={handleSubmit} className="card-body rounded-xl glass">

//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Service ID</span>
//                             </label>
//                             <input type="text" name='service_Id' placeholder="Enter service name Eg: 01" className="input input-bordered" />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Service Name</span>
//                             </label>
//                             <input type="text" name='title' placeholder="Enter name" className="input input-bordered" />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Image</span>
//                             </label>
//                             <input name='img' type="text" placeholder="Your image url" className="input input-bordered w-full" />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Price</span>
//                             </label>
//                             <input name='price' type="text" placeholder="Enter Price" className="input input-bordered w-full" />
//                         </div>
//                         <div className="form-control">
//                             <textarea name='description' className="textarea textarea-bordered w-full" placeholder="Description "></textarea>
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Duration</span>
//                             </label>
//                             <input name='duration' type="text" placeholder="Enter Duration" className="input input-bordered w-full" />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Photos</span>
//                             </label>
//                             <input name='photos' type="text" placeholder="Enter Photos" className="input input-bordered w-full" />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Retouch</span>
//                             </label>
//                             <input name='retouch' type="text" placeholder="retouch" className="input input-bordered w-full" />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Prints</span>
//                             </label>
//                             <input name='prints' type="text" placeholder="No of Prints" className="input input-bordered w-full" />
//                         </div>
//                         <div className="form-control mt-6">
//                             <button className="btn glass">Add Service</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };


// export default AddService;