import React from 'react'
import Book from './Book'

const BookShelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map((book, i) => (
                        <Book
                            key={book.id}
                            book={book}
                            changeShelf={props.changeShelf}
                        />
                    ))}
                </ol>
            </div>
        </div>
    )
};

export default BookShelf
