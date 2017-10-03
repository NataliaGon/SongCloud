
import './reset.css';
import './style.css';
import './style-mobile.css';
import './nav.scss';
import classNames from 'classnames/bind';
import Search from './search.js';
import { NavLink } from 'react-router-dom';
import Explore from './explore.js';
import Playlist from './playlist.js';



import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';


export default class Nav extends React.Component {
    
        constructor (props) {
            super(props);
            this.state = {
                isPressed: false
            }
        }
    
        render () {
            var navClass = classNames({
                'nav-conteiner': true,
                'nav-conteiner-mob': this.state.isPressed
            });
            var clientIndClass = classNames({
                 'client-indif': true        
            });
            
            
            if (this.state.isPressed && window.matchMedia("(max-width: 768px)").matches){clientIndClass = 'client-indif-mob'}
            
            // updateDimensions(){
            //         if(window.innerWidth > 768){
            //         clientIndClass={
            //             'client-indif':true,
            //             'display-block':false
            //     }
            // }

            
            
            // componentDidMount(){
            //     this.updateDimensions();
            //     window.addEventListener("resize", this.updateDimensions.bind(this));
            // }
            // componentWillUnmount() {
            //     window.removeEventListener("resize", this.updateDimensions.bind(this));
            //   }

            return (
            <Router>
               <div>
               <div className={navClass}>
                    <span className='icon-soundcloud' ></span>
                    <h6 id="site-name">SoundCloud</h6>
                    <span className="icon-caret-down" onClick={this.openSerch.bind(this)}></span>
                    <ul>
                        <li><NavLink to ="/Explore" href='#'><p>Explore</p></NavLink></li>
                        <li><NavLink to ="/Playlist" href='#'>Playlist</NavLink></li>
                    </ul> 
                    <a className= {clientIndClass} href="#">Logout</a>  
                    <Search/>
                </div>
                <Route exact path="/" component={Explore} />
                <Route path="/Playlist" component={Playlist} />
          
              </div>
            </Router>
            );
        }
        openSerch(){
            console.log('123');
            this.setState({ isPressed: true });
        }
     
    }
      
    
    