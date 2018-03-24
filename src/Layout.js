import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Banner from './images/Banner.png';

export default class Layout extends Component {

    render () {

        return (
            <div className="w3-container base">
                <ul className="language">
                    <LiNavLink activeClassName="current" to="/startsida">Svenska</LiNavLink>
                    <LiNavLink activeClassName="current" to="/etusivu">Suomeksi</LiNavLink>
                    <LiNavLink activeClassName="current" to="/homepage">English</LiNavLink>
                </ul>
                <header>
                    <img src={Banner} alt="Banner" className="w3-round-large hoverZoomLink"></img>
                </header>
                    <div className="navigation">
                        <ul className="nav">
                            <LiNavLink activeClassName="active" exact to="/startsida">Startsida</LiNavLink>
                            <LiNavLink activeClassName="active" to="/uppfödningar">Uppfödningar</LiNavLink>
                            <LiNavLink activeClassName="active" to="/bilder">Bilder</LiNavLink>
                            <LiNavLink activeClassName="active" to="/videor">Videor</LiNavLink>
                            <LiNavLink activeClassName="active" to="/till-salu">Till salu</LiNavLink>
                            <LiNavLink activeClassName="active" to="/kalender">Kalender</LiNavLink>
                            <LiNavLink activeClassName="active" to="/kontaktuppgifter">Kontaktuppgifter</LiNavLink>
                        </ul>
                    </div>
                {this.props.children}
            </div>
        )
    }

}
const LiNavLink = ({to,exact, strict, activeClassName, className, activeStyle, style, isActive: getIsActive, ...rest }) =>
    <Route
        path={typeof to === 'object' ? to.pathname : to}
        exact={exact}
        strict={strict}
        children={({ location, match }) => {
            const isActive = !!(getIsActive ? getIsActive(match, location) : match)

            return (
                <li
                    className={isActive ? [activeClassName, className].join(' ') : className}
                    style={isActive ? { ...style, ...activeStyle } : style}>
                    <Link
                        to={to}
                        {...rest}
                    />
                </li>
            )
        }}
    />