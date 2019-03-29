import React from 'react'

function Article({ isOpen, article, onBtnClick }) {
  const text = isOpen ? 'close' : 'open'
  return (
    <div class="col-6">
      <div className="media pb-3">
        <div className="media-body">
          <h2 class="mt-0">{article.title}</h2>
          <p>{getBody({ isOpen, article })}</p>
          <button className="btn btn-primary" onClick={onBtnClick}>
            {text}
          </button>
        </div>
      </div>
    </div>
  )
}

function getBody({ isOpen, article }) {
  if (!isOpen) return null
  return <section>{article.text}</section>
}

export default Article
