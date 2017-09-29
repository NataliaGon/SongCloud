
import './reset.css';
import './style.css';
import './style-mobile.css';
import './nav.scss';
import Search from './search.js';

export default class Nav extends React.Component {
    
        constructor (props) {
            super(props);
            this.state = {
                isPressed: false
            }
        }
    
        render () {
            var btnClass = classNames({
                'nav-conteiner': true,
                'nav-conteiner-mob': this.state.isPressed
            });
    
            return (
                <div className='nav-conteiner'>
                    <span className='icon-soundcloud'></span>
                    <h6 id="site-name">SoundCloud</h6>
                    <span className="icon-caret-down" ></span>
                    <ul>
                        <li><a href='#'>Explore</a></li>
                        <li><a href='#'>Playlist</a></li>
                    </ul>
                    <a className= "client-indif" href="#">Logout</a>  
                    <Search/>
                    
                </div>
            );
        }
    
        openSerch () {
            this.setState({ isPressed: true });
        }
    }