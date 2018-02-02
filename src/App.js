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
            books.map( (book) => ( myBooks[book.shelf].push(book) ))
            this.setState({ books: myBooks })
        })
    }


    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then( () => {
            this.setState((prevState) => {
                if (book.shelf) {
                    prevState.books[book.shelf] = prevState.books[book.shelf].filter( (b) => b !== book)
                }
                prevState.books[shelf].push(book)
                return {books: prevState.books};
            });
        })


    }

    render() {
        return (
            <div className="app">
                <Route path="/search" render={() => (
                    <SearchPage
                        changeShelf={this.changeShelf}
                    />
                )}/>

                <Route exact path="/" render={() => (
                    <MyReads
                        currentlyReading={this.state.books.currentlyReading}
                        wantToRead={this.state.books.wantToRead}
                        read={this.state.books.read}
                        changeShelf={this.changeShelf}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp
