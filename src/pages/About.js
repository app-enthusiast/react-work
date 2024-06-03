import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate();
  return (
    <div className='grid bg-green-200 p-20 m-4 mx-16 border-4'>
      <h1 className='text-black-200 rounded-lg bg-green-500 text-4xl font-bold px-20 flex-1'>About Page</h1>
      <button onClick={ ()=> navigate(-1) } className="flex-1 bg-green-400"> Go Back </button>
    </div>
  )
}
