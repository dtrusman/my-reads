import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '..';

interface Props {
    handleChange: Function;
    handleKeyPress: Function;
}

interface State {
    text: string;
}

export default class SearchBar extends Component<Props, State> {

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

    handleEnter = evt => {
        this.props.handleKeyPress(evt);
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
                        onKeyPress={this.handleEnter}
                    />
                </div>

                <Button className="search-icon" onClick={this.handleEnter} />
            </div>
        )
    }
}