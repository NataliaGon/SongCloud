import './footer-player.scss';

import React from 'react';


export default class FooterPlayer extends React.Component {
        render() { 
            const streamUrl =`https://api.soundcloud.com/tracks/250711755/stream`;
            const songUrl= ` ${streamUrl}?client_id=nviGqqUJ1aoaFVSMA7EdLE3IZJLwYFKU` ;   
        return (
            <div>
                {/* <audio src={songUrl}
                       controls
                       autoPlay/> */}
            
            </div>
        );
    }        
}