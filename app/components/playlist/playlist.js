import './playlist.scss';
import Genres from '../genres/genres.js';
import Nav from '../nav/nav.js'

import React from 'react';


export default class Playlist extends React.Component {
    render() {
        return (           
         <div>  
                               
            <Genres/>          
          </div>
        );
    }
}