import React from 'react'
import { Outlet } from "react-router-dom";
import NavBar from '../../components/NavBar';
export default function AppLayout() {
  return (
    <>
    <header>
      <h1>Welcome to react router DOM sample</h1>
      <NavBar />
    </header>
    <section className='content-area'>
         <Outlet />
    </section>
    <footer>This is footer right resrved</footer>
    </>
  )
}
