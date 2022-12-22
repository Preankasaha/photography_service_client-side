import React from 'react';

const Aboutme = () => {
    return (
        <div className='bg-fuchsia-900 py-8'>
            <h2 className='text-5xl text-center font-bold text-white my-8'>Photography Courses With Me</h2>
            <div className='grid md:grid-cols-2 justify-around'>
                <div>
                    <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className='text-white bg-fuschia-900 text-left'>
                    <h2 className='text-2xl my-8'>Hello, This is Photographer Artison with you!</h2>
                    <p className='text-2xl my-5'>
                        I am providing wedding photography services since last 10 years. You can choose any of the wedding packages according to your need.
                    </p>
                    <p className='text-2xl my-5'>Besides phopgraphy, I also photography courses. You can avail any one of the course if you feel enthusiast</p>
                    <h2 className='text-2xl font-bold'>Photography courses:</h2>
                    <ul className='text-2xl text white font-semibold'>
                        <li className='my-4'>
                            Candid Photography for 3 months
                        </li>
                        <li className='my-4'>
                            photography for beginners
                        </li>
                        <li className='my-4'>
                            Photography for Professionals
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;