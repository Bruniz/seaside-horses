import React, { Component } from 'react';
import './css/App.css';
import Layout from './Layout';
import Main from './Main'


class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            currentPage:'Main'
        };
        this.handleNavigationClick = this.handleNavigationClick.bind(this);
    }


    handleNavigationClick(newPage) {
        this.setState({
            currentPage: newPage
        })
    }


    render() {
        return (
            <Layout
                currentPage={ this.state.currentPage }
                onNavigationClick={ this.handleNavigationClick }>
                <Main />
            </Layout>
    )
    }
}

export default App;
