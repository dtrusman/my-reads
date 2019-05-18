import React, { Component } from 'react';
import { BookList, Loader, Empty, SearchBar } from '../components';
import * as API from '../services/BooksAPI';
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

    handleChange = text => {
        this.setState(oldState => ({
            text,
            bookList: text.length <= 3 ? [] : oldState.bookList
        }));
    }

    handleKeyPress = async evt => {
        const { text } = this.state;

        if (evt.key === 'Enter' || evt.type === 'click') {
            this.setState({ loading: true });
            const result = text.length ? await API.search(text) : [];
            this.setState({ bookList: result, loading: false });
        }
    }

    renderBookGrid = bookList => {
        if (bookList.length)
            return <BookList list={bookList} type="search" />

        return <Empty text="no books found" className="empty-list" />
    }

    render() {
        const { bookList, loading } = this.state;

        return (
            <div className="search-books">
                <SearchBar handleChange={this.handleChange} handleKeyPress={this.handleKeyPress} />

                <div className="search-books-results">
                    {loading ? <Loader text="Loading..." /> : this.renderBookGrid(bookList)}
                </div>
            </div>
        )
    }
}