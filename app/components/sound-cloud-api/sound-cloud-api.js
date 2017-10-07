import './sound-cloud-api.scss';

import React from 'react';


export default class SoundCloudAPI extends React.Component {
        render() {      
        return (
            <div>
               fetch('https://api.soundcloud.com/tracks?client_id=YOUR_CLIENT_ID&limit=15&offset=0&tags=hip-hop')
      .then((res) => res.json())
      .then(data => {
        console.log('data', data);
      })
      .catch((err) => {
        console.log('err', err);
      });
            </div>
        );
    }        
}