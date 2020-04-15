import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import BookShelves from './BookShelves'
import SearchBook from './SearchBook'
import './App.css'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
		<Route exact path='/' component={BookShelves}/>
    	<Route path='/search' component={SearchBook}/>
      </div>
    )
  }
}

export default BooksApp
