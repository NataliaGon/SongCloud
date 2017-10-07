import './playlist-sitebar-nav.scss';

import React from 'react';


export default class PlaylistSiteBarNav extends React.Component {
    render() {
        return (
            <div className="site-bar-container">
                <button className="add-new-playlist"> Add new playlist </button>
                <hr />
                <ul>
                    <li><a href="#">My songs</a></li>
                    <li><a href="#">Cool trance music</a> </li>
                </ul>
            </div>
        );
    }
}