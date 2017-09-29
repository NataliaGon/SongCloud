import './reset.css';
import './style-ico-search.css';
import './search.scss';

export default class Song extends React.Component {
    render() {
        return (           
            <div className = "search"> 
            <span className="icon-search"></span>               
            <input className="input-search"  type="search" placeholder="search"/>  
                     
            </div>      
        );
    }
}
