import React from 'react'
import './App.css'
import MyReads from './MyReads'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
    state = {
        books : {
            currentlyReading: [],
            wantToRead: [],
            read: []

        }
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            let myBooks = {
                currentlyReading: [],
                wantToRead: [],
                read: []
            }
            books.map( (book) => {  myBooks[book.shelf].push(book) })
            console.log(myBooks)
            this.setState({ books: myBooks })
        })
    }

    render() {
        return (
            <div className="app">
                <Route path="/search" render={() => (
                    <SearchPage/>
                )}/>

                <Route exact path="/" render={() => (
                    <MyReads
                        currently_reading_books={this.state.books.currentlyReading}
                        want_to_read_books={this.state.books.wantToRead}
                        read_books={this.state.books.read}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp
