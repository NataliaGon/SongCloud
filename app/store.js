import {createStore, combineReducers } from "redux";

import songReducer from "./reducers/songReducer";


const reducer = combineReducers({
    currentSong: songReducer,
    playlists: playlistReducer
    
})

export default createStore(reducer);
 