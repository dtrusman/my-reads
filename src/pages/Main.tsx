import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Shelf, Loader } from '../components';

import * as API from '../services/BooksAPI';

export const SHELVES = [
    { id: 'currentlyReading', name: 'Currently Reading' },
    { id: 'wantToRead', name: 'Want to Read' },
    { id: 'read', name: 'Read' },
    { id: 'none', name: 'None' }
];

interface Props { }
interface State {
    bookList: any[],
    loading: boolean
}

export default class Main extends Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            bookList: [],
            loading: false
        }
    }

    async componentDidMount() {
        this.setState(oldState => ({
            loading: !oldState.loading
        }));

        const list = await API.getAll();

        this.setState(oldState => ({
            loading: !oldState.loading,
            bookList: list
        }));
    }

    updateList = async (item, shelfId) => {
        await API.update(item, shelfId);

        const list = await API.getAll();

        this.setState({ bookList: list });
    }

    renderShelves = bookList => {
        return SHELVES.map(shelf => {

            const list = bookList.length ? bookList.filter(b => b.shelf === shelf.id) : bookList;

            return (
                <Shelf
                    key={shelf.name}
                    name={shelf.name}
                    bookList={list}
                    onUpdateList={this.updateList}
                />
            )
        });
    }

    render() {
        const { bookList, loading } = this.state;

        return (
            <div className="list-books">

                {loading ? <Loader text="Loading..." /> : this.renderShelves(bookList)}

                <div className="open-search">
                    <Link to="/search" />
                </div>

            </div >
        )
    }
}