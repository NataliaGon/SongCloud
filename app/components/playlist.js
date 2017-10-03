import React from 'react';
import './reset.css';
import './playlist.scss'
import Genres from './genres.js';



export default class Playlist extends React.Component {
    render() {
        return (           
         <div>            
            <Genres/>          
          </div>
        );
    }
}