import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";           
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './pages/layout/Layout';
import './index.css';
import BlogDetail from './pages/BlogDetail';
import Login from './pages/Login';

const router = createBrowserRouter( createRoutesFromElements (
  <Route Component = { Layout } path="/" errorElement = { <ErrorPage /> } >
    <Route  index Component = { App } />
    <Route  path='contact' Component={ Contact  } />
    <Route  path='about' Component = { About } />
    <Route  path='login' Component = { Login } />
    <Route  path='blog' Component = { Blog } >
        <Route 
         // this path will match URLs like
         // - /blogs/react
         // - /blogs/django
         path='blogs/:blogId'
         // the matching param will be available to the loader
        Component = { BlogDetail } 
        />
    </Route>
  </Route>
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router= { router } />
  </React.StrictMode>
);
reportWebVitals();