import React, { Component } from 'react';
import { Header } from './components';
import { Route } from 'react-router-dom';
import './App.css';
import { Main, Search } from './pages';

const title = 'My Reads';

interface Props { }
interface State { }

export default class App extends Component<Props, State> {
    
    render() {
        return (
            <div className="app">

                <Header title={title} />

                <Route exact path="/" component={Main} />

                <Route path="/search" component={Search} />
            
            </div>
        )
    }
}