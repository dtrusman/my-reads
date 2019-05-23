import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '..';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    handleChange = evt => {
        const value = evt.target.value;
        this.props.handleChange(value);
    }

    render() {
        return (
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
        )
    }
}