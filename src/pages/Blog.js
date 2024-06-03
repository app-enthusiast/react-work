import React from 'react'
import { Outlet } from "react-router-dom";

export default function Blog() {
  return (
    <>
    <h2>BlogListingPage </h2>
    <div className='border: bg-red-100 font-bold'>
        <Outlet />
    </div>
    </>
  )
}
