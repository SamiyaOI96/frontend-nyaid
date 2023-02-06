import './App.css';
import axios from 'axios';
import ReactDOM from 'react-dom';


function Nav() {
    return (
    <nav>
        <h3> Logo </h3>
        <div className="nav__links">
        <ul>
            
            <li>
                Brooklyn
            </li>
            
            <li>
                Bronx
            </li>

            <li>
                Manhattan
            </li>

            <li>
                Queens
            </li>

            <li>
                Staten Island
            </li>
        </ul>
        </div>
    </nav>

    );
}

export default Nav;