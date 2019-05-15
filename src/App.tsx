import React, { Component } from 'react';
import { Header, Search } from './components';
import { Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';

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