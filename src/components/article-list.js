import React from 'react'
import Article from './article'
import useAccordion from '../custom-hooks/accordion'

function ArticleList({ articles }) {
  const { openItemId, toggleOpenItem } = useAccordion()

  const articleItems = articles.map((article) => (
    <Article
      article={article}
      isOpen={article.id === openItemId}
      onBtnClick={toggleOpenItem(article.id)}
    />
  ))

  return (
    <div className="container">
      <div className="row">{articleItems}</div>
    </div>
  )
}

export default ArticleList
