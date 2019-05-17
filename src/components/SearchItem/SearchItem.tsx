import React, { Component } from 'react';
import * as API from '../../services/BooksAPI';
import { Card, Changer, Loader } from '..';

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
        this.setState({ loading: true });
        const { item } = this.props;
        const shelfID = evt.target.value;
        await API.update(item, shelfID);
        this.setState({ loading: false });
    }

    renderBook = () => {
        const { item } = this.props;

        return (
            <Card>
                <div className="card-title">{item.title}</div>
                <div className="image-container">
                    <img className="image" src={item.imageLinks.thumbnail} alt={item.title} />
                </div>
                <div className="changer-container">
                    <div className="add-book-container">
                        <Changer enableNone={false} onChooseOption={this.handleChangeShelf} />
                    </div>
                </div>
            </Card>
        )
    }

    render() {
        const { loading } = this.state;

        return loading ? <Card><Loader text="Adding book..." /></Card> : this.renderBook()
    }
}