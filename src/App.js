import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
            errorElement: <NotFound />
        },
        {
            path: '/home',
            element: <Home />,
        },
    ]);
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}

export default App;
