import React from 'react'
import './App.css'
import MyReads from './MyReads'
import SearchPage from './SearchPage'
import { Switch, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import NotFound from './NotFound'

class BooksApp extends React.Component {
    state = {
        books : []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }


    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then( () => {
            BooksAPI.getAll().then((books) => {
                this.setState({ books })
            })
        });
    }

    render() {
        return (
            <div className="app">
                <Switch>
                    <Route path="/search" render={() => (
                        <SearchPage
                            books={this.state.books}
                            changeShelf={this.changeShelf}
                        />
                    )}/>

                    <Route exact path="/" render={() => (
                        <MyReads
                            books={this.state.books}
                            changeShelf={this.changeShelf}
                        />
                    )}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        )
    }
}

export default BooksApp
