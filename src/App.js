import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import fire, { auth, provider } from './fire';

import Layout from './Layout';
import Main from './Main'
import Horses from './Horses'
import Images from './Images'
import Videos from './Videos'
import ForSale from './ForSale'
import EventCalender from './EventCalender'
import Contact from './Contact'

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentLanguage : "se",
            user : null,

        }
    }


    logout() {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });    }
    login() {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    }

    render() {
        return (

            <Layout>
                <Switch>
                    <Route exact path='/' render={ () => <Main currentLanguage = {"se"} />} />
                    <Route exact path='/se/' render={ () => <Main currentLanguage = {this.state.currentLanguage} />} />
                    <Route path='/se/startsida' render={ () => <Main currentLanguage = {this.state.currentLanguage} />} />
                    <Route path='/fi/etusivu' render={ () => <Main currentLanguage = {this.state.currentLanguage} />} />
                    <Route path='/en/homepage' render={ () => <Main currentLanguage = {this.state.currentLanguage} />} />
                    <Route path='/se/uppfödningar' component={Horses} />
                    <Route path='/se/bilder' component={Images} />
                    <Route path='/se/videor' component={Videos} />
                    <Route path='/se/till-salu' component={ForSale} />
                    <Route path='/se/kalender' component={EventCalender} />
                    <Route path='/se/kontaktuppgifter' component={Contact} />
                    <Route path='/en/homepage' render={ () => <Main currentLanguage = {this.state.currentLanguage} />} />
                    <Route path='*' render={ () => <h1>Page not found</h1>} />
                </Switch>

            </Layout>
    )
    }
}
