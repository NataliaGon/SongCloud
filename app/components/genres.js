import React from 'react';
import './reset.css';
import './style-mobile.css';
import './genres.scss';

export default class Genres extends React.Component {
    render() {
        return ( 
                <div className= "genres">     
                <ul >
                    <li><a href = "#">Genres:</a></li>
                    <li><a href = "#">all musik</a></li>
                    <li><a href = "#">hip-hop rap</a></li>
                    <li><a href = "#">house</a></li>
                    <li><a href = "#">rock</a></li>
                    <li><a href = "#">pop</a></li>
                    <li><a href = "#">reggaeton</a></li>
                    <li><a href = "#">dubstep</a></li>
                </ul>   
               <span className="icon-menu" onClick={this.openMenu.bind(this)}></span>
                </div>
                
                       
        );
        
    }
    openMenu(){
        console.log('123');
    }
}
