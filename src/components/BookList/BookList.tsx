import React, { Component } from 'react';
import { BookItem, SearchItem, Loader } from '..';
import * as API from '../../services/BooksAPI';

export type ITEM_TYPE = "book" | "search";

interface Props {
    list: any[];
    type: ITEM_TYPE;
    updateBookList?: any;
    loadingItem?: boolean;
}

interface State {
    bookList: {}[];
    loading: boolean;
}

export default class BookList extends Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            bookList: [],
            loading: true
        }
    }

    async componentDidMount() {
        const { list } = this.props;

        this.updateList(list);
    }

    updateList = async list => {
        const p = list.map(async item => {
            return await this.mutateList(item);
        });

        const changedList = await Promise.all(p);

        this.setState({ bookList: changedList, loading: false });
    }

    mutateList = (item) => {
        return new Promise(async (resolve, reject) => {

            if (!item.shelf) {
                resolve(await API.get(item.id));
            }

            resolve(item);
        });
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