import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";           
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';
import Home from './pages/Home';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppLayout from './pages/layout/AppLayout';

import './index.css';
import BlogDetail from './pages/BlogDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "main",
        element: <App />,
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
       path: "/blog",
       element: <Blog />,
       children: [
        {
          path: "blogs/:blogId",
          element: <BlogDetail />,
        }
       ],
      }
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router= { router } />
  </React.StrictMode>
);


reportWebVitals();
