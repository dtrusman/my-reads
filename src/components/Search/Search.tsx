import React, { Component } from 'react';
import { Input, BookList, Button, Loader } from '..';
import { Link } from 'react-router-dom';
import * as API from '../../services/BooksAPI';
import './Search.css';

interface Props { }

interface State {
    bookList: [];
    text: string;
    loading: boolean;
}

export default class Search extends Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            bookList: [],
            text: '',
            loading: false
        }
    }

    handleChange = async evt => {
        const value = evt.target.value;
        this.setState(oldState => ({
            text: value,
            bookList: value.length <= 3 ? [] : oldState.bookList
        }));
    }

    handleEnter = async evt => {
        const { text } = this.state;

        if (evt.key === 'Enter' || evt.type === 'click') {
            this.setState({ loading: true });
            const result = text.length ? await API.search(text) : [];
            this.setState({ bookList: result, loading: false });
        }
    }

    renderBookGrid = bookList => {
        return (
            <ol className="books-grid">
                <BookList list={bookList} type="search" />
            </ol>
        )
    }

    render() {
        const { bookList, loading } = this.state;

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
                            onKeyPress={this.handleEnter}
                        />
                    </div>

                    <Button className="search-icon" onClick={this.handleEnter} />
                </div>

                <div className="search-books-results">
                    {loading ? <Loader text="Loading..." /> : this.renderBookGrid(bookList)}
                </div>
            </div>
        )
    }
}