import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
    useTitle('AddService')
//add service
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;
        const duration = form.duration.value;
        const photos = form.photos.value;
        const retouch = form.retouch.value;
        const print = form.print.value;
        console.log(title, img, price, description, duration, photos, retouch, print);
        const services = {

            title,
            img,
            price,
            description,
            duration,
            photos,
            retouch,
            print
        }
        fetch('https://photo-artisan-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    toast.success('Thanks for adding services')
                    form.reset();
                }
            })

            .catch(error => console.error(error));

    }
    return (
        <div className="hero min-h-screen bg-fuchsia-900">

            <div className="hero-content flex-col lg:flex-row glass">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add services from here!</h1>
                    <p className="text-2xl font-semibold py-6">you may add services here if you like.</p>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl" data-theme='night'>
                    <form onSubmit={handleSubmit} className="card-body rounded-xl glass">


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input type="text" name='title' placeholder="Enter name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input name='img' type="text" placeholder="Your image url" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name='price' type="text" placeholder="Enter Price" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <textarea name='description' className="textarea textarea-bordered w-full" placeholder="Description "></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Duration</span>
                            </label>
                            <input name='duration' type="text" placeholder="Enter Duration" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">No of Photos</span>
                            </label>
                            <input name='photos' type="text" placeholder="Enter Photos" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Retouch</span>
                            </label>
                            <input name='retouch' type="text" placeholder="retouch" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Prints</span>
                            </label>
                            <input name='print' type="text" placeholder="No of Prints" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn glass">Add Service</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};


export default AddService;