import React from 'react';

const Gallery = () => {
    return (
        <div className='pb-8'>
            <h2 className='5-xl'>Hello, This is Photographer Prith with you. I am providing wedding photography services since last 10 years. You can choose any of the wedding packages according to your need.</h2>
            <h2 className='text-5xl text-center font-bold mt-14'>PHOTO GALLERY</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 m-8'>
                <img src="https://weddingbirdbd.com/wp-content/uploads/2022/03/best-wedding-photography-bangladesh-14-1024x682.jpg" alt="" srcset="" />
                <img src="https://riss-photography.com/wp-content/uploads/2020/06/Croatian-Club-Wedding-Photography-4-1000x667.jpg" alt="" srcset="" />
                <img src="https://riss-photography.com/wp-content/uploads/2018/02/pw10.jpg" alt="" srcset="" />
                <img src="https://weddingbirdbd.com/wp-content/uploads/2022/01/WED-8.jpg" alt="" srcset="" />
                <img src="https://riss-photography.com/wp-content/uploads/2020/06/RISS9351-Edit.jpg" alt="" srcset="" />
                <img src="https://riss-photography.com/wp-content/uploads/2021/02/IMG_2870-Edit.jpg" alt="" srcset="" />

            </div>
        </div>
    );
};

export default Gallery;