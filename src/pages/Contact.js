import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate();
  const goBackToHome =()=> {
    navigate('/');
  }
  return (
    <div className='grid bg-green-200 p-20 m-4 mx-16 border-4'>
      <h1 className='text-black-200 rounded-lg bg-green-500 text-4xl font-bold px-20 flex-1'>Contact Page</h1> <br />
      <button onClick={ goBackToHome } className="">Go Back</button>
    </div>
  )
}
