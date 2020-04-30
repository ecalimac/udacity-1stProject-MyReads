# MyReads Project

This repository contains my implementation of the MyReads app. 
This is the final assessment project for the Udacity's React Fundamentals course (part of the React Nanodegree Program). 
The aim of the project was to practice building a React web application, by writing components, passing state and props down from parent to children, and using react-router to manage changing between components and displaying the correct browser URLs.

# Project Overview & Requirements

Create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

The main page of the MyReads App displays three bookshelves: "Currently Reading," "Want to Read," and "Read", with books on each shelf. Each book has a control button that lets you select the shelf for that book. When you select a different shelf, the book moves there. The default value for the control should always be the current shelf the book is in.

The search page has a text input for searching books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control to add the book to the main library.

When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

[See the **rubric** for specific criteria.](https://review.udacity.com/#!/rubrics/918/view)

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Versions

v.1.0
* Default project implementation

## Authors

[Elena Calimac](https://github.com/ecalimac)