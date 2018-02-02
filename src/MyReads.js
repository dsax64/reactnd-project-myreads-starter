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
                            books={this.props.currentlyReading}
                            changeShelf={this.props.changeShelf}
                        />
                        <BookShelf
                            title='Want to Read'
                            books={this.props.wantToRead}
                            changeShelf={this.props.changeShelf}
                        />
                        <BookShelf
                            title='Read'
                            books={this.props.read}
                            changeShelf={this.props.changeShelf}
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