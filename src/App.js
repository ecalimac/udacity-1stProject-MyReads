import React from 'react'
import { Route } from 'react-router-dom'
import BookShelves from './BookShelves'
import SearchBook from './SearchBook'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    // Get the books from BooksAPI and populate state
    BooksAPI.getAll()
	.then(data => {
      this.setState({ books: data });
      //console.log(this.state);
    });
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
