export default function playlistReducer(state = null, action) {
    console.log(action);
  
   
    
    if (action.type==="NEW_PLAYLIST") {
        const a = this.state.playlists.concat(<input type="text" autoFocus={true}  className="playlist-input" placeholder="Untitled"></input>);
        return a;     
       }
  
    return state;
  }
  