import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
// import App from '../../App';

export default function AppLayout() {
  return (
    <>
    <header className='bg-gray-400'>
      <h1 className=''>Welcome to react router DOM sample</h1>
      <NavBar />
    </header>
    <section className='content-area'>
         <Outlet />
    </section>
    <footer><Footer /></footer>
    </>
  )
}
