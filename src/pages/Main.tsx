import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Shelves } from '../components';

import * as API from '../services/BooksAPI';

const shelves = [
    { name: 'Currently Reading', shelf: 'currentlyReading' },
    { name: 'Want to Read', shelf: 'wantToRead' },
    { name: 'Read', shelf: 'read' }
];

interface Props { }
interface State {
    bookList: []
}

export default class Main extends Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            bookList: []
        }
    }

    async componentDidMount() {
        const bookList = await API.getAll();
        this.setState({ bookList });
    }

    render() {
        const { bookList } = this.state;

        return (
            <div className="list-books">

                <div className="list-books-content">
                    {
                        shelves.map(shelve => {
                            const list = bookList.filter(b => b.shelf === shelve.shelf);
                            console.log(list);
                            // return <Shelves
                            //     key={shelve.name}
                            //     name={shelve.name}
                            //     bookList={list}
                            // />;
                        })
                    }
                </div>

                <div className="open-search">
                    <Link to="/search" />
                </div>
            </div>
        )
    }
}