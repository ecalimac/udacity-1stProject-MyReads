import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelves from './BookShelves'
import SearchBook from './SearchBook'
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
  updateShelf = (book, shelf) => {
  	BooksAPI.update(book, shelf).then(() => {
    	this.setState(prevState=>({
        	books: prevState.books.filter(b => {
            	if(b.id === book.id) {
                	return (book.shelf = shelf);
                } else {
                	return book;
                }
            })
        }));
    });
  };

  render() {
    return (
      <div className="app">
		<Route exact path='/' render={()=>(<BookShelves books={this.state.books} update={this.updateShelf}/>)}/>
    	<Route path='/search' render={()=>(
        	<SearchBook component={SearchBook}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
