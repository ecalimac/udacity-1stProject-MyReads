import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./ListBooks";

class SearchBook extends Component {
  state = {
    query: "",
    books: [],
  };

  updateQuery = (query) => {
    //...make some assumptions...
    //check if the query is empty
    if (!query) {
      this.setState({ query: "", books: [] });
      return;
    }
    //search for multiple words
    //query = query.replace(/  +/g,' ').trim();
    //before to start searching we have to assure that the user doesn't typed another character
    //=> update the query (input field) as soon as a character is typed
    this.setState({ query: query });
    //...finally we can start searching...
    BooksAPI.search(query).then((responseFromAPI) => {
      //make sure again that the user has not typed a character
      if (query !== this.state.query) return;
      
      //if the API response is undefined or empty, just clean the books array
      // !! is similar to Boolean();
      const undefinedResponse = !!responseFromAPI.error;
      const queryResult = undefinedResponse ? [] : responseFromAPI;
      
      //These books do not know which shelf they are on.
      //We need to make sure that books have the correct state while on the search page.
      //Adding shelf property
      queryResult.forEach((bookFromAPI) => {
        const bookToUpdate = this.props.booksOnShelves.find(
          (bookWithShelf) => bookWithShelf.id === bookFromAPI.id
        );
        if (bookToUpdate) {
          bookFromAPI.shelf = bookToUpdate.shelf;
        }
      });
      this.setState({ books: queryResult });
    });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <ListBooks
          books={this.state.books}
          updateBook={this.props.updateBook}
        />
      </div>
    );
  }
}

SearchBook.propTypes = {
  booksOnShelves: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired,
};
export default SearchBook;
