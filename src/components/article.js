import React from 'react'
import CommentsList from './comments-list'

const Article = ({ isOpen, article, onBtnClick }) => {
  const openCloseButtonText = isOpen ? 'close' : 'open'
  return (
    <div className="col-6">
      <div className="media pb-3">
        <div className="media-body">
          <h2 className="mt-0">{article.title}</h2>
          <p>{article.text}</p>
          <div className="list-group mb-3">{getComments({ isOpen, article })}</div>
          <button className="btn btn-primary" onClick={onBtnClick}>
            {openCloseButtonText}
          </button>
        </div>
      </div>
    </div>
  )
}

const getComments = ({ isOpen, article }) => {
  if (!isOpen) return null
  return <CommentsList data={article.comments} />
}

export default Article
