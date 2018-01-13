import './playlist-sitebar-nav.scss';

import React from 'react';


export default class PlaylistSiteBarNav extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             playlists: []
//         }
//         this.createPlaylist = this.createPlaylist.bind(this);
//     }


    // createPlaylist() {
    //     console.log('3445');
    //     const a = this.state.playlists.concat(<input type="text" autoFocus={true}  className="playlist-input" placeholder="Untitled"></input>);
    //     this.setState({
    //         playlists: a
    //     })
    // }
    render() {
        const playlists = this.props.playlists
        return (
            <div className="site-bar-container">
                <button className="add-new-playlist" onClick={() => this.props.addPlayList()}> Add new playlist </button>
                <hr />
                
                    {playlists}
               
            </div>
        );
    }
}

function mapStateToProps(store){
    return{
        playlists: store.playlists
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPlayList() {
            dispatch({
                type: "NEW_PLAYLIST",
                playlists: data
              });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(playlists);