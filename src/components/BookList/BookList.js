import React, { Component } from 'react';
import { BookItem, SearchItem, Loader } from '..';

export default class BookList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bookList: [],
            loading: false
        }
    }

    componentDidMount() {
        const { list } = this.props;
        this.setState({bookList: list});
    }

    static getDerivedStateFromProps(props, state) {
        return {
            bookList: props.list
        }
    }

    renderItem = item => {
        const { type, updateBookList, loadingItem } = this.props;

        return type === 'book'
            ? <BookItem key={item.id} item={item} updateItem={updateBookList} loading={loadingItem} />
            : <SearchItem key={item.id} item={item} />
    }

    render() {
        const { bookList, loading } = this.state;

        return (
                loading 
                    ? <Loader text="Loading..." /> 
                    : <ol className="books-grid">
                        {bookList.length > 0 && bookList.map(this.renderItem)}
                      </ol>
        )
    }
}