import './reset.css';
import './song.scss';

export default class Song extends React.Component {
    render() {
        return (           
            <div className = "song-container"> 
                <div className ="song-clip">
                </div>                                
            </div>      
        );
    }
}