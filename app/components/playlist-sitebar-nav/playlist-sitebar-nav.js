import './playlist-sitebar-nav.scss';

import React from 'react';


export default class PlaylistSiteBarNav extends React.Component {
    
    createPlaylist(){
        console.log('3445');
        this.playlists.push(
            <li><a href="#">Cool trance music</a> </li>
        )
        }
    render() {
        var playlists =[];
        return (
            <div className="site-bar-container">
                <button className="add-new-playlist" onClick={this.createPlaylist}> Add new playlist </button>
                <hr />
                <ul>
                    <li><a href="#">My songs</a></li>
                    <li><a href="#">Cool trance music</a> </li>
                    {playlists}
                </ul>
            </div>
        );
    }
}