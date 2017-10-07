import './explore.scss';
import Genres from '../genres/genres.js';
import SongsList from '../songs-list/songs-list.js';
import Nav from '../nav/nav.js';
import Loader from '../loader/loader.js';

import React from 'react';



export default class Explore extends React.Component {
    render() {
        return (           
         <div>                              
            <Genres/>
            <SongsList/>
            
          </div>
        );
    }
}