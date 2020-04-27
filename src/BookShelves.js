import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListBooks from './ListBooks'

class BookShelves extends Component {
	render() {
        const { books, update } = this.props;
    
        const shelfWantTo = books.filter(book => book.shelf === "wantToRead");
        const shelfRead = books.filter(book => book.shelf === 'read');
        const shelfReading = books.filter(book => book.shelf === "currentlyReading")
      
    	return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            	{ shelfReading.length > 0 && (
          		    <div>
                		<div className="bookshelf">
                  			<h2 className="bookshelf-title">Currently Reading</h2>
                  			<div className="bookshelf-books">
                  				<ListBooks books={shelfReading} update={update}/>
                  			</div>
                		</div>
          	  		</div>
          		)}  
            	{ shelfWantTo.length > 0 && (
          		    <div>
                		<div className="bookshelf">
                  			<h2 className="bookshelf-title">Want to read</h2>
                  			<div className="bookshelf-books">
                  				<ListBooks books={shelfWantTo} update={update}/>
                  			</div>
                		</div>
          	  		</div>
          		)}
            	{ shelfRead.length > 0 && (
          		    <div>
                		<div className="bookshelf">
                  			<h2 className="bookshelf-title">Read</h2>
                  			<div className="bookshelf-books">
                  				<ListBooks books={shelfRead} update={update}/>
                  			</div>
                		</div>
          	  		</div>
          		)}
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
		</div>
        );
    }
}

BookShelves.propTypes = {
	books: PropTypes.array.isRequired,
    update: PropTypes.func.isRequired
};

export default BookShelves
