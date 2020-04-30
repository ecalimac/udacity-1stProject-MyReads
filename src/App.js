import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookShelves from "./BookShelves";
import SearchBook from "./SearchBook";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    // Get the books from BooksAPI and populate state.
    // getAll retrives just the books wich contain a shelf property
    BooksAPI.getAll().then((data) => {
      this.setState({ books: data });
    });
  }

  updateShelf = (book, shelf) => {
    if (this.state.books) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState((state) => ({
          books: state.books.filter((b) => b.id !== book.id).concat([book]),
        }));
      });
    }
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookShelves
              books={this.state.books}
              updateBook={this.updateShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBook
              booksOnShelves={this.state.books}
              updateBook={this.updateShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
