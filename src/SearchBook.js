import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBookResults from './SearchBookResults';
import PropTypes from 'prop-types'

class SearchBook extends Component {
  
   clearQueryInput() {
    this.setState({
      query: '',
      results:[]
    });
  }

	render(){
      // ES6 Destructuring (this helps us to write more legible code -> we'll write state instead of this.state
      const { state, search } = this.props;
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
					value={state.query}
					onChange={ event => search(event.target.value) }
				/>
              </div>
            </div>
            <SearchBookResults results={state.results}/>
          </div>
        )
    }
}

SearchBook.propTypes = {
  state: PropTypes.oneOfType([
  	PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  search: PropTypes.func
}
export default SearchBook