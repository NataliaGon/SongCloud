import './song.scss';
import classNames from 'classnames/bind';

import React from 'react';

export default class Song extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            heartPressed: false
        }
    }

    openDropDown(){
        console.log('2378');
        this.setState({ isPressed: true });
    

}
    
    render() {
        var dropdownClass = classNames({
            'dropdown': true,
            'dropdown-open': this.state.heartPressed   
       });

        return (
            <div>
                <div className="song-container">
                    <div className="song-clip">
                    </div>
                    <h4>Name of the song</h4>
                    <i className="fa fa-clock-o" aria-hidden="true"/>
                    <i className="fa fa-heart-o" aria-hidden="true" onClick={this.openDropDown.bind(this)}/>
                    
                </div>


                <div className={dropdownClass}>
                    <h3>Add to playlist</h3>
                    <a href="#">Create playlist</a>
                    <hr/>
                </div>
            </div>
        );
    }        
}