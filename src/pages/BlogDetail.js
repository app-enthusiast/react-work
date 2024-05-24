import React from 'react'
import { useParams } from 'react-router-dom'

function BlogDetail() {
    let { blogId } = useParams();

  return (
    <div>
    <h2>Blog Detail page: { blogId }</h2>
    </div>
  )
}

export default BlogDetail