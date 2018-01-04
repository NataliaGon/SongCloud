import {createStore, combineReducers } from "redux";

import songReducer from "./reducers/songReducer";


const reducer = combineReducers({
    currentSong: songReducer
    
})

export default createStore(reducer);
 