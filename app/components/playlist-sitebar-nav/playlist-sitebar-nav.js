import './playlist-sitebar-nav.scss';

import React from 'react';


export default class PlaylistSiteBarNav extends React.Component {
    constructor() {
        super();
        this.state = {
            playlists: []
        }  
        this.createPlaylist = this.createPlaylist.bind(this);      
    }

    createPlaylist(){
        console.log('3445');
        const a= this.state.playlists.concat(<input type="text" autoFocus={true} className="playlist-input" placeholder="Untitled"></input>);
        this.setState( {          
            playlists: a
        })
        }
    render() {        
        return (
            <div className="site-bar-container">
                <button className="add-new-playlist" onClick={this.createPlaylist}> Add new playlist </button>
                <hr />
                <ul>
                    {/* <li><a href="#">My songs</a></li>
                    <li><a href="#">Cool trance music</a> </li> */}
       
       {this.state.playlists}
                </ul>
            </div>
        );
    }
}