import React from 'react'

const Comment = (props) => {
  const { user, text } = props
  return (
    <div className="list-group-item">
      <h3 className="mb-1">{user}</h3>
      <p className="mb-1">{text}</p>
    </div>
  )
}

export default Comment
