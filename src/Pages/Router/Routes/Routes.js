import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../../Layout/Main/Main';
import Home from '../../Home/Home';
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
            
        ]
    }
])