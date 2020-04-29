import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  render(){
    const {books, updateBook} = this.props;
    return(
      <ol className="books-grid">
      {books.map(eachBook => (
      	<li key={eachBook.id}>
        	<div className="book">
            	<div className="book-top">
                	{/* if book have imageLinks display the thumbnail */}
					{eachBook.imageLinks && (
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${eachBook.imageLinks.thumbnail})`}}></div>)}
					{/* if book doesn't have imageLinks display a placeholder image */}
					{!eachBook.imageLinks && (
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundColor: "light-grey"}}></div>
                    )}
                    <div className="book-shelf-changer">
                    	<select
							id={eachBook.id}
							value={eachBook.shelf?eachBook.shelf : "none"}
							onChange={event => updateBook(eachBook, event.target.value)}>
                        	<option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
				</div>
				<div className="book-title">{eachBook.title}</div>
             	{eachBook.authors &&
                eachBook.authors.map(author => (
                <div className="book-authors" key={author}>
                    {author}
                </div>
                ))}
             	</div>
        	</li>
            ))}
		</ol>
    );
  }
}
ListBooks.propTypes = {
	books: PropTypes.array.isRequired,
  	updateBook: PropTypes.func.isRequired
}

export default ListBooks