import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import /*fire, */{ auth, provider } from './fire';

import Layout from './Layout';
import Main from './Main'
import Horses from './Horses'
import Images from './Images'
import Videos from './Videos'
import ForSale from './ForSale'
import EventCalender from './EventCalender'
import Contact from './Contact'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentLanguage: '',
            user: null,
            languages: ['se', 'fi', 'en']

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

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.getCurrentLanguage();
        }
    }

    getCurrentLanguage() {
        const currentLanguage = this.props.location.pathname.split("/")[1];
        if (this.state.languages.includes(currentLanguage)) {
            this.setState({ currentLanguage });
        }
        else {
            console.log("Unknown language selected");
        }
    }

    componentWillMount(){
        this.getCurrentLanguage();
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
export default withRouter(App)