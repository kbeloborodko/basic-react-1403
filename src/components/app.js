import React, { useState } from 'react'
import Select from 'react-select'
import ArticleList from './article-list'
import DatePicker from './datepicker'

const App = ({ articles }) => {
  const [username, setUsername] = useState('Kyrylo')
  const [selected, setSelected] = useState()

  const handleUserChange = (ev) => {
    const { value } = ev.target
    setUsername(value.length < 10 ? value : '')
  }

  const options = articles.map((article) => ({
    label: article.title,
    value: article.id
  }))

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Article App</h1>
      </div>
      <div className="form-group">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUserChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="articles">Articles</label>
        <Select id="articles" value={selected} onChange={setSelected} options={options} isMulti />
      </div>
      <DatePicker />
      <ArticleList articles={articles} />
    </div>
  )
}

App.propTypes = {}

export default App
