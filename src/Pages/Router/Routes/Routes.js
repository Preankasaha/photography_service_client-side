import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../../Layout/Main/Main';
import Home from '../../Home/Home';
import ServiceDetailsCard from '../../Home/Services/ServiceDetailsCard';
import Services from '../../Home/Services/Services';
import Login from '../../Login/Login';


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
                element: <Login />
            },
            {
                path: '/services',
                element: <Services />
            },

            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetailsCard />

            },
        ]
    }
])