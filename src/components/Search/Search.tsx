import React, { Component } from 'react';
import { Input, BookList } from '..';
import * as API from '../../services/BooksAPI';
import { Link } from 'react-router-dom';

interface Props { }

interface State {
    bookList: []
}

export default class Search extends Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            bookList: []
        }
    }

    handleChange = async evt => {
        const value = evt.target.value;

        const result = value.length > 3 ? await API.search(value) : [];

        this.setState({ bookList: result });
    }

    render() {
        const { bookList } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <div className="close-search">
                        <Link to="/" />
                    </div>

                    <div className="search-books-input-wrapper">
                        <Input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className="books-grid">
                        <BookList list={bookList} type="search" />
                    </ol>
                </div>
            </div>
        )
    }
}