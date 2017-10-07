import './playlist.scss';
import PlaylistSiteBarNav from '../playlist-sitebar-nav/playlist-sitebar-nav.js';
import Genres from '../genres/genres.js'


import React from 'react';


export default class Playlist extends React.Component {
    render() {
        return (           
         <div>                                
            <Genres/> 
            < PlaylistSiteBarNav/>         
          </div>
        );
    }
}