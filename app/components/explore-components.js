import './reset.css';
import './explore-components.scss';
import Nav from './nav.js';
import Genres from './genres.js';
import Song from './song.js';

export default class Explore extends React.Component {
    render() {
        return (           
         <div>
            <Nav/>
            <Genres/>
            <Song/>
          </div>
        );
    }
}