import React, { Component } from 'react';
import { BookList, Loader, Empty, SearchBar } from '../components';
import { debounce } from 'throttle-debounce';
import * as API from '../services/BooksAPI';
import './Search.css';

interface Props { }

interface State {
    bookList: [];
    query: string;
    loading: boolean;
}

export default class Search extends Component<Props, State> {
    searchDebounce: any;

    constructor(props) {
        super(props);

        this.state = {
            bookList: [],
            query: '',
            loading: false
        }

        this.searchDebounce = debounce(250, this._fetchItems);
    }

    handleChange = query => {
        const searchQuery = query ? query : '';
        this.setState({ query: searchQuery }, () => { this.searchDebounce(this.state.query) });
    }

    _fetchItems = async query => {
        const result = query && query.length ? await API.search(query) : [];
        this.setState({ bookList: result });
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
                <SearchBar handleChange={this.handleChange} />

                <div className="search-books-results">
                    {loading ? <Loader text="Loading..." /> : this.renderBookGrid(bookList)}
                </div>
            </div>
        )
    }
}