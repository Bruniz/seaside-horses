import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';
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
            currentPage: '',
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
            this.setCurrentRoute();
        }
    }

    setCurrentRoute() {
        const path = this.props.location.pathname.split("/");
        if (path[1] === "" || path[2] === "") {
            return;
        }
        const currentLanguage = path[1];
        const currentPage = path[2];
        if (this.state.languages.includes(currentLanguage)) {
            this.setState({ currentLanguage, currentPage });
        }
        else {
            console.log("Unknown language selected");
        }
    }

    componentWillMount(){
        this.setCurrentRoute();
    }

    render() {
        const {currentLanguage, currentPage} = this.state;
        return (
                <Layout currentLanguage={currentLanguage}>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to='/se/startsida'/>} />
                        <Route exact path='/se/' render={ () => <Main currentLanguage = {currentLanguage} />} />
                        <Route path='/se/startsida' render={ () => <Main currentLanguage = {currentLanguage} />} />
                        <Route path='/fi/etusivu' render={ () => <Main currentLanguage = {currentLanguage} />} />
                        <Route path='/en/homepage' render={ () => <Main currentLanguage = {currentLanguage} />} />
                        <Route path='/se/uppfödningar' component={Horses} />
                        <Route path='/se/bilder' component={Images} />
                        <Route path='/se/videor' component={Videos} />
                        <Route path='/se/till-salu' component={ForSale} />
                        <Route path='/se/kalender' component={EventCalender} />
                        <Route path='/se/kontaktuppgifter' component={Contact} />
                        <Route path='/en/homepage' render={ () => <Main currentLanguage = {currentLanguage} />} />
                        <Route path='*' render={ () => <h1>Page not found</h1>} />
                    </Switch>
                </Layout>
    )
    }
} 
export default withRouter(App)