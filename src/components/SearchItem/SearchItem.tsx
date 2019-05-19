import React, { Component } from 'react';
import * as API from '../../services/BooksAPI';
import { Card, Changer, Loader, Badge } from '..';
import imageNotFound from '../../icons/image.png';

import './SearchItem.css';
interface Props {
    item: any;
}

interface State {
    loading: boolean;
}

export default class SearchItem extends Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    handleChangeShelf = async evt => {
        const { item } = this.props;

        this.setState({ loading: true });

        const shelfID = evt.target.value;
        await API.update(item, shelfID);

        this.setState({ loading: false });
    }

    renderBook = () => {
        const { item } = this.props;

        const srcImage = item.imageLinks ? item.imageLinks.thumbnail : imageNotFound;

        return (
            <div className="book-search-container">
                <div className="card-title">{item.title}</div>
                <div className="image-container">
                    <img className="image" src={srcImage} alt={item.title} />
                    <div className="card-authors">{item.authors}</div>
                </div>
                <div className="changer-container">
                    <Badge text={item.shelf} />
                    <div className="add-book-container">
                        <Changer enableNone={false} onChooseOption={this.handleChangeShelf} />
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { loading } = this.state;

        return (
            <Card>
                {loading ? <Loader text="Adding book..." /> : this.renderBook()}
            </Card>
        )
    }
}