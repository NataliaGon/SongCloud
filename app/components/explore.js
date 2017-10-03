import React from 'react';
import './reset.css';
import './explore.scss';

import Genres from './genres.js';
import Song from './song.js';

export default class Explore extends React.Component {
    render() {
        return (           
         <div>          
            <Genres/>
            <Song/>
          </div>
        );
    }
}