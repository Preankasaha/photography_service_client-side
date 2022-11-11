import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const { createUser, loading, updateUserProfile } = useContext(AuthContext);

    const [error, setError] = useState();

    useTitle('Signup');
    if (loading) {
        return <progress className="progress w-full"></progress>
    }
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        
// regex
        if (!/(?=.*[A-Z])/.test(password)) {
            toast.error('please provide at least one uppercase letter')
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            toast.error('please provide at least one special character')
            return;
        }
        //signin
        createUser(email, password)
            .then(result => {
                const user = result.user;
                //jwt user
                toast.success('You sign in successfully')
                // console.log(user);
                form.reset();
                handleUpdateUserProfile(name, photoURL)
                setError('');

            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
        //profileupdate
        const handleUpdateUserProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            }
            updateUserProfile(profile)
                .then(() => { })
                .catch(error => {

                    setError(error.message);
                });
        }
    }
    return (
        <div>
            <div className="hero min-h-screen" data-theme="night">
                <div className="hero-content flex-col lg:flex-row glass">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-fuchsia-900">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='photoURL' placeholder="Enter photoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="Enter email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className='text-xl text-white'>
                                {error}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary glass">Sign Up</button>
                            </div>
                            <div>

                                Already have an account? <Link to='/login' className='btn btn-outline glass'>Log In</Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;