import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBookResults from './SearchBookResults';

class SearchBook extends Component {
  state = {
    query: '',
    results: []
  }

  searchBooks = newQuery => {
    this.setState({query: newQuery});
    
    if(newQuery.length > 0){
    	BooksAPI.search(newQuery).then(data=>{
    		this.setState({
            	results: data
            });
    	});
    };
  };


  clearQueryInput = () => {
    this.setState({
    	query: ''
    })
  };

	render(){
    	return(
          <div className="search-books">
            <div className="search-books-bar">
          	<Link to='/' className="close-search" onClick={this.clearQueryInput}>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
					type="text" 
					placeholder="Search by title or author"
					value={this.state.query}
					onChange={ event => this.searchBooks(event.target.value) }
				/>
              </div>
            </div>
            <SearchBookResults results={this.state.results}/>
          </div>
        )
    }
}

export default SearchBook