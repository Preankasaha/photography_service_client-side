import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../../Layout/Main/Main';
import Home from '../../Home/Home';
import ServiceDetails from '../../Home/Services/ServiceDetails';
import Services from '../../Home/Services/Services';
import LogIn from '../../LogIn/LogIn';
import SignUp from '../../SignUp/SignUp';

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
                path: 'signin',
                element: <SignUp />
            },
            {
                path: '/services',
                element: <Services />
            },

            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails />

            },
        ]
    }
])