import React from 'react'
import { Route } from 'react-router-dom'
import BookShelves from './BookShelves'
import SearchBook from './SearchBook'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    query: '',
    results: []
  }

  componentDidMount() {
    // Get the books from BooksAPI and populate state
    BooksAPI.getAll()
	.then(data => {
      this.setState({ books: data });
      //console.log(this.state);
    });
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
  }
  render() {
    return (
      <div className="app">
		<Route exact path='/' component={BookShelves}/>
    	<Route path='/search' render={()=>(
        	<SearchBook 
            	state={this.state}
				search={this.searchBooks}
            />
        )}/>
      </div>
    )
  }
}

export default BooksApp
