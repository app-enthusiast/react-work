import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function BlogDetail() {
  let { blogId } = useParams();
  const navigate = useNavigate();
  const goBackToHome =()=> {
    navigate('/');
  }
  
  return (
    <div>
     <h2>Blog Detail page: { blogId }</h2>
     <button onClick={ goBackToHome } className="">Go Back to Home</button>
    </div>
  )
}
