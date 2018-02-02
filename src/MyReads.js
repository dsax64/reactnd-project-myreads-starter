import React, { Component } from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class MyReads extends Component {
    render () {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            title='Currently Reading'
                            books={this.props.currently_reading_books}
                        />
                        <BookShelf
                            title='Want to Read'
                            books={this.props.want_to_read_books}
                        />
                        <BookShelf
                            title='Read'
                            books={this.props.read_books}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search" className="add-contact">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default MyReads