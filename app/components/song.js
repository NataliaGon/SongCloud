import './reset.css';
import './song.scss';
import './style-song.css';
import classNames from 'classnames/bind';

export default class Song extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            heartPressed: false
        }
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
                    <span className="icon-clock" ></span>
                    <span className="icon-heart" onClick={this.openDropDown.bind(this)} ></span>

                </div>


                <div className={dropdownClass}>
                    <h3>Add to playlist</h3>
                    <a href="#">Create playlist</a>
                    <hr/>
                </div>
            </div>
        );
    }
        openDropDown(){
            console.log('2378');
            this.setState({ isPressed: true });
        

    }
}