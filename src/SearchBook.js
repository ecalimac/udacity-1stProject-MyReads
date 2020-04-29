import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
//import SearchBookResults from './SearchBookResults';

class SearchBook extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = query => {
  //...make some assumptions...
  //check if the query is empty
    if(!query){
      this.setState({query: '', books: []})
      return;
    }
  //search for multiple words
   //query = query.replace(/  +/g,' ').trim();
  //before to start searching we have to assure that the user doesn't typed another character
  //=> update the query (input field) as soon as a character is typed
    this.setState({query: query});
  //...finally we can start searching...
    BooksAPI.search(query).then((response) => {
  //why not make sure again that the user has not typed a character?
      if( query !== this.state.query) return;
      
      const emptyResponse = !!response.error;
      const result = emptyResponse ? [] : response;
  //These books do not know which shelf they are on. They are raw results only. 
  //We need to make sure that books have the correct state while on the search page.
  //Adding shelf properties
      result.forEach(item => {
        const myBook = this.props.booksOnShelves.find(elem => elem.id === item.id)
        if(myBook) item.shelf = myBook.shelf
      })
      this.setState({books: result});
    });
  }

	render(){
    	return(
          <div className="search-books">
            <div className="search-books-bar">
          	<Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input 
					type="text" 
					placeholder="Search by title or author"
					value={this.state.query}
					onChange={ event => this.updateQuery(event.target.value) }
				/>
              </div>
            </div>
			<ListBooks books={this.state.books} updateBook={this.props.updateBook}/>

          </div>
        )
    }
}
SearchBook.propTypes = {
  	booksOnShelves: PropTypes.array.isRequired,
	updateBook: PropTypes.func.isRequired
}
export default SearchBook