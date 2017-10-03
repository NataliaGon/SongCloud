import React from 'react';
import './reset.css';
import './style-ico-search.css';
import './search.scss';
// import isPressed from './nav.js'


export default class Search extends React.Component {
    render() {
        return (           
            <div className = "search"> 
            <span className="icon-search"></span>               
            <input className="input-search"  type="search" placeholder="search"/>                 
            </div>      
        );
    }
}
