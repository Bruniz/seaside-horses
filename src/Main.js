import React, { Component } from 'react';
import Footer from './Footer';
import fire from './fire';
var panorama = "https://lh5.googleusercontent.com/-EjzgqSgniSI/Uzqq1hyQL9I/AAAAAAAACkQ/I2Z7GwHhMw4/s1100/DSC03561.JPG";



export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: '',
            currentLanguage: ''
        }
    }

    componentWillMount() {
        let textRef = fire.database().ref('framsida');
        textRef.on('child_added', snapshot => {
            /* Update React state when message is added at Firebase Database */
            let message = { text: snapshot.val(), id: snapshot.key };
            this.setState({ content: message });
        })
    }
    render () {

        return (
            <div className="content">
                <h4>
                    {this.state.content}
                </h4>
                <div className="panorama">
                    <img src={panorama} alt="Seaside"/>
                </div>

                <hr className = "bottomHr"/>
                <Footer />
            </div>
        )
    }

}