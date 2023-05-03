import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'

import './index.css'
import App from './App';
import PairedServers from './pages/PairedServers';
import Discord from './pages/Discord';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: '/paired_servers',
        element: <PairedServers />
    },
    {
        path: '/discord',
        element: <Discord />
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
