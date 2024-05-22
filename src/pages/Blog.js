import React from 'react'
import { useParams } from 'react-router-dom'

function Blog() {
    let { blogId } = useParams();

  return (
    <div>
    <h2>Blog page-id: { blogId }</h2>
    </div>
  )
}

export default Blog