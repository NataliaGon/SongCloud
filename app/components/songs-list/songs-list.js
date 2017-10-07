import './songs-list.scss';
import Song from '../song/song.js';

import React from 'react';



export default class SongsList extends React.Component {
    render() {
        return (           
         <div className="songs-container">                              
              <Song/>
            
          </div>
        );
    }
}