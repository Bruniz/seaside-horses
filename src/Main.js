import React, { Component } from 'react';
import Footer from './Footer';
import fetch from 'isomorphic-fetch';
import fire, { auth, /*provider*/ } from './fire';
var panorama = "https://lh5.googleusercontent.com/-EjzgqSgniSI/Uzqq1hyQL9I/AAAAAAAACkQ/I2Z7GwHhMw4/s1100/DSC03561.JPG";



export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: [],
            dbURL: "",
            user: null,
        }


    }

    handleChange(e) {

    }

    componentWillMount() {
        this.setState({
            user: this.props.user,
            dbURL:`frontpage/${this.props.currentLanguage}`
        })

    }

    componentDidUpdate(prevProps) {
        if (this.props.currentLanguage !== prevProps.currentLanguage ||
            this.props.user !== prevProps.user) {

            this.setState({
                user: this.props.user,
                dbURL:`frontpage/${this.props.currentLanguage}`
            }, this.updateContent);
            return true;
        }
        return false;
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });

        this.updateContent();
    }

    updateContent() {
        let textRef = fire.database().ref(this.state.dbURL);
        let items = [];
        textRef.on('value', snapshot => {
            items.push(snapshot.val());
            this.setState({ content: items[0] });
        });
    }

    render () {

        const content = this.state.content.map( (item, key) => <p key={key}> {item} </p>);

        return (
            <div className="content">
                <hr className = "topHr"/>
                <h4> {content}</h4>
                <div className="panorama ">
                    <img src={panorama} alt="Panorama of Seaside Stable" className="w3-round-large hoverZoomLink"/>
                </div>
                <hr className = "bottomHr"/>
                <Footer />
                {this.state.user ?
                    <button onClick={this.logout}>Log Out</button>
                    :
                    <button onClick={this.login}>Log In</button>
                }
                {this.state.user ?
                    <div className='user-profile'>
                        <img alt="Profile" src={this.state.user.photoURL} />
                    </div>
                    :
                    <div className='wrapper'>
                        <p>Logged out</p>
                    </div>
                }
            </div>
        )
    }

}