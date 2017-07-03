import React, { Component } from 'react';

class Layout extends Component {

    render () {
        var pages = ['Startsida', 'Uppfödningar', 'Bilder', 'Videor', 'Till salu', 'Kalender', 'Kontaktuppgifter'];

        return (
            <div className="base">
                <header>Seaside Horses | Stall Seaside </header>
                    <div className="navigation">
                        <ul className="nav">
                            {pages.map((page)=> {
                                return (
                                    <li key={page} onClick={ () => this.props.onNavigationClick(page) }>
                                        <a className={(this.props.currentPage === page) ? "current" : null}>
                                        <span>
                                            {page}
                                        </span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                {this.props.children}
                <footer>Kontakta oss</footer>
            </div>
        )
    }

}

export default Layout;