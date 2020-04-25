import React, {Component} from 'react'
import PropTypes from 'prop-types'

class SearchBookResults extends Component {
	render(){
      // Destructuring props
      const { results } = this.props;
      
    	return (
          <div className="search-books-results">
              <ol className="books-grid">
          {results.map(eachBook=>(
        			<li key={eachBook.id}>
						{/*console.log(eachBook)*/}
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" 
								style={{ width: 128, height: 193, backgroundImage: `url(${eachBook.imageLinks.thumbnail})`}}>
							</div>
                            <div className="book-shelf-changer">
                              <select>
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
  results: PropTypes.array.isRequired
}

export default SearchBookResults