import React, { Component } from 'react';
import Footer from './Footer';
export default class EventCalender extends Component {

    render () {

        return (
            <div className="content">
               Händelse kalender hit

                <hr className = "bottomHr"/>
                <Footer />
            </div>
        )
    }

}