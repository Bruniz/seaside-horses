import React, { Component } from 'react';

export default class Footer extends Component {

    render() {

        return (

            <footer>
                <div className="contact">
                    <h2> Kontakta oss</h2>
                    <hr/>
                    <h3>
                        <p>
                            Stall Seaside
                        </p>
                        <p>
                            Skåldövägen 64 <br/>
                            10600 Ekenäs
                        </p>
                        <p>
                            Telefon: 040-5636326 <br/>
                            Epost: stall.seaside.talli@gmail.com
                        </p>
                    </h3>
                </div>
                <div className="follow">
                    <h2>Följ oss</h2>
                    <hr/>
                    <div className="socialIcons">
                        <ul>
                            <li>
                                <a href="http://www.facebook.com/stallseasidetalli">
                                    <img src="http://seasidehorses.fi/facebook.png" className="w3-hover-opacity" alt="Facebook"/>
                                </a>
                            </li>
                            <li>
                                <a href="http://www.instagram.com/seasidehorses">
                                    <img src="http://seasidehorses.fi/instagram.png" className="w3-hover-opacity" alt="Instagram"/>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="http://www.youtube.com/stallseasidetalli">
                                    <img src="http://seasidehorses.fi/youtube.png" className="w3-hover-opacity" alt="YouTube"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.google.com/maps/dir/current+location/59.900820,23.480582">
                                    <img src="http://seasidehorses.fi/location.png" className="w3-hover-opacity" alt="Navigate"/>
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>
            </footer>
        )
    }
}

