import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function Layout() {
  return (
    <div className=''>
    <header className=''>
      <h1 className=''>Welcome to react router DOM sample</h1>
      <NavBar /> <br />
    </header>
    <main className='content-area'>
         <Outlet />
    </main>
    <footer><Footer /></footer>
    </div>
  )
}
