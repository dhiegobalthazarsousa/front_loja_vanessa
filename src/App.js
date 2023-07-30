import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
            errorElement: <NotFound />,
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/dashboard',
            element: <Dashboard />,
        },
    ]);
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default App;
