import React, {Component} from 'react'
import PropTypes from 'prop-types'

class SearchBookResults extends Component {
	render(){
      // Destructuring props
      const { books, query, results, update } = this.props;
          // Create empty array to store search results
    let displayResults = [];

    // If results for query were found
    if (results.length > 0 && query !== "") {
      // Map over all results and add each result to display array
      results.forEach(result => {
        /* Search results were not displaying correct shelf if previously added to library. The fix is to filter all library books and match them against the search results. If a match is found, push the library info (with shelf) to displaying results, and afterwards push the remaining search results. */
        const matchingResults = books.filter(book => book.id === result.id);
        if (matchingResults.length > 0) {
          /* The spread operator makes sure matching results are copied together with all their properties over to the displayResults array. Without it, we get an error about those results missing their unique key identifier. */
          displayResults.push(...matchingResults);
        } else {
          displayResults.push(result);
        }
      });
    }

      
    	return (
          <div className="search-books-results">
              <ol className="books-grid">
          {displayResults.map(eachBook=>(
        			<li key={eachBook.id}>
						{/*console.log(eachBook)*/}
                        <div className="book">
                          <div className="book-top">
							{/* if book have imageLinks display the thumbnail */}
							{eachBook.imageLinks && (
                            <div className="book-cover" 
								style={{ width: 128, height: 193, backgroundImage: `url(${eachBook.imageLinks.thumbnail})`}}>
							</div>)}
							{/* if book doesn't habe imageLinks display a placeholder image */}
							{!eachBook.imageLinks && (
                            <div className="book-cover" 
								style={{ width: 128, height: 193, backgroundColor: "light-grey"}}>
							</div>)}
                            <div className="book-shelf-changer">
                              <select
								  id={eachBook.id}
								  value={eachBook.shelf ? eachBook.shelf : "none"}
								  onChange={ev => update(eachBook, ev.target.value)}>
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
						eachBook.authors.map(author=>(
						  <div className="book-authors" key={author}>{author}</div>
						))}
                        </div>
                      </li>
       		 ))}
          	  </ol>
          </div>
        );
    }
}

SearchBookResults.propTypes = {
  books: PropTypes.array.isRequired,
  query: PropTypes.string,
  results: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  update: PropTypes.func.isRequired
}

export default SearchBookResults