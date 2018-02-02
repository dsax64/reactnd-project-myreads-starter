import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchPage extends Component {
    state = {
        books: []
    };

    onChange = (e) => {
        if (e.target.value) {
            BooksAPI.search(e.target.value).then( (result) => {
                let books = (result !== undefined && result.error === undefined) ? result : [];
                this.setState({ books })
            })
        } else {
            this.setState({ books: []})
        }
    };

    render () {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input onChange={this.onChange} type="text" placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map((book, i) => (
                            <Book
                                key={i}
                                book={book}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage