import React, { Component } from 'react'

class Book extends Component {
    onSelectChange = (e) => {
        this.props.changeShelf(this.props.book, e.target.value)
    };

    getThumbnail = () => {
        return (this.props.book.imageLinks && this.props.book.imageLinks.smallThumbnail) || 'http://via.placeholder.com/128x193?text=No%20Cover'
    };

    getAuthors = () => {
        return (this.props.book.authors && this.props.book.authors.join(', ')) || ''
    };

    render () {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{width: 128, height: 188, backgroundImage: `url("${this.getThumbnail()}")`}} />
                        <div className="book-shelf-changer">
                            <select onChange={this.onSelectChange} defaultValue={this.props.book.shelf || 'none'}>
                                <option value="disabled" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.getAuthors()}</div>
                </div>
            </li>
        )
    }
}

export default Book