
import './nav.scss';
import classNames from 'classnames/bind';
import Search from '../search/search.js';
import { NavLink } from 'react-router-dom';
import Explore from '../explore/explore.js';
import Playlist from '../playlist/playlist.js';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import React from 'react';




export default class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isPressed: false
        }
    }

    openSerch() {
        this.setState({ isPressed: true });
    }

    render() {
        var navClass = classNames({
            'nav-conteiner': true,
            'nav-conteiner-mob': this.state.isPressed
        });
        var clientIndClass = classNames({
            'client-indif': true,
            'client-indif-mob': this.state.isPressed
        });


        return (
            <Router>
                <div>
                    <div className={navClass}>
                        <i className="fa fa-soundcloud" aria-hidden="true" />
                        <h6 id="site-name">SoundCloud</h6>
                        <i className="fa fa-caret-down" aria-hidden="true" onClick={this.openSerch.bind(this)} />
                        <ul>
                            <li><NavLink to="/Explore" href='#'>Explore</NavLink></li>
                            <li><NavLink to="/Playlist" href='#'>Playlist</NavLink></li>
                        </ul>
                        <a className={clientIndClass} href="#">Logout</a>
                        <Search />
                    </div>
                   
                    <Switch>
                        <Route exact path="/Explore" component={Explore} />
                        <Route path="/Playlist" component={Playlist} />
                    </Switch> 
                </div>
            </Router>
        );
    }


}


