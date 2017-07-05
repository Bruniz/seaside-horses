import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Layout from './Layout';
import Main from './Main'
import Horses from './Horses'
import Images from './Images'
import Videos from './Videos'
import ForSale from './ForSale'
import EventCalender from './EventCalender'
import Contact from './Contact'


export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Route exact path='/' component={Main} />
                    <Route path='/uppfödningar' component={Horses} />
                    <Route path='/bilder' component={Images} />
                    <Route path='/videor' component={Videos} />
                    <Route path='/till-salu' component={ForSale} />
                    <Route path='/kalender' component={EventCalender} />
                    <Route path='/kontaktuppgifter' component={Contact} />
                </Layout>
            </BrowserRouter>
    )
    }
}
