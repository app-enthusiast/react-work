import React from 'react'
import { useParams } from 'react-router-dom'

function Blog() {
    let {blogId} = useParams();

  return (
    <div>
    blog page-id: { blogId }
    </div>
  )
}

export default Blog