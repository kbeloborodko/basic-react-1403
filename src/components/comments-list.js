import React from 'react'
import Comment from './comment'

const commentsList = ({ data }) => {
  return data.map((comment) => {
    return <Comment key={comment.id} user={comment.user} text={comment.text} />
  })
}

export default commentsList
