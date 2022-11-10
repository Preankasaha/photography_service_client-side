import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../../Layout/Main/Main';
import Home from '../../Home/Home';
import Services from '../../Home/Services/Services';
import LogIn from '../../LogIn/LogIn';
import SignUp from '../../SignUp/SignUp';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import ServiceDetailsCard from '../../Home/Services/ServiceDetailsCard';
import ReviewForm from '../../Private/Review/ReviewForm';

import Review from '../../Private/Review/ReadReview/ReadReview';
import Blog from '../../Blog/Blog';
import MyReview from '../../Private/MyReview/MyReview';
import AddService from '../../Private/AddService/AddService';
import ReadReview from '../../Private/Review/ReadReview/ReadReview';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <LogIn />

            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/services',
                element: <Services />
            },

            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetailsCard></ServiceDetailsCard>

            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <PrivateRoutes><ReviewForm /></PrivateRoutes>

            },

            // {
            //     path: '/reviews/:id',
            //     loader: ({ params }) => fetch(`http://localhost:5000/reviews?service=${params.id}`),
            //     element: <ReadReview></ReadReview>
            // },
            {
                path: '/myreviews',
                element: <PrivateRoutes><MyReview /></PrivateRoutes>

            },
            {
                path: '/addservice',
                element: <PrivateRoutes><AddService /></PrivateRoutes>

            },
            {
                path: '/blog',
                element: <Blog></Blog>

            },
        ]
    }
])