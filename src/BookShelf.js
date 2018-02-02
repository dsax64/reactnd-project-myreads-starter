import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    render () {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book, i) => (
                            <Book
                                key={i}
                                title={book.title}
                                author={book.author}
                                coverURL={book.coverURL}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf
