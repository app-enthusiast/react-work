import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
  const goBackToHome =()=> {
    navigate('/');
  }
  return (
    <div className='grid bg-green-200 p-20 m-4 mx-16 border-4'>
      <h1 className='text-black-200 rounded-lg bg-green-500 text-4xl font-bold px-20 py-2'>Login Page</h1>
      <input type='text' className=" border border-gray-100 text-gray-900 text-lg rounded-lg w-50 p-4 dark:bg-gray-700 dark:border-gray-200  dark:text-white"/><br />
      <input type='text' className=" border border-gray-100 text-gray-900 text-lg rounded-lg w-50 p-4 dark:bg-gray-700 dark:border-gray-200  dark:text-white"/><br />
      <button className="py-2 border border-gray-700">Login</button><br />
      <button onClick={ goBackToHome } className="py-2 border border-gray-700"> Go Back </button>
    </div>
  )
}
