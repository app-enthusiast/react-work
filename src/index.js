import React from 'react';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';
import Home from './pages/Home';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
   path: "/about",
   element: <About />,
  },
  {
    path: "/blog/:blogId",
    element: <Blog />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router= { router } />
  </React.StrictMode>
);


reportWebVitals();
