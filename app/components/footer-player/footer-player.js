import './footer-player.scss';
import { connect } from 'react-redux';
import React from 'react';

class FooterPlayer extends React.Component {
        render() { 
            const song = this.props.currentSong

            if (!song){
                return <div/>;
            } 

            const streamUrl =`https://api.soundcloud.com/tracks/${song.id}/stream`;
            const songUrl= ` ${streamUrl}?client_id=nviGqqUJ1aoaFVSMA7EdLE3IZJLwYFKU`;

            console.log(this.props.currentSong);

        return (
            <div>
                <audio src={songUrl}
                       controls
                       autoPlay/>
            
            </div>
        );
    }        
}

function mapStateToProps(store){
    return{
        currentSong: store.currentSong
    }
}

export default connect(mapStateToProps)(FooterPlayer);
