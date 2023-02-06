import './App.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'


function Nav() {
    const navStyle={
        color:'white'
        // text-decoration:'none'
    };
    // const linkUnder={
    //     text-decoration: none;
    // }
    return (
    <nav>
        <div className="nav__links">
        <ul>
                <Link style={navStyle} to='dashboard'>
                    <li>DashBoard</li>
                </Link>
                
                <Link style={navStyle} to='/brooklyn'>
                    <li>Brooklyn</li>
                </Link>
                <Link style={navStyle} to='/bronx'>
                    <li>Bronx</li>
                </Link>
                <Link style={navStyle} to='/manhattan'>
                    <li>Manhattan</li>
                </Link>
                <Link style={navStyle} to ='/queens'>
                    <li>Queens</li>
                </Link>
                <Link style={navStyle} to='statenisland'>
                <li>Staten Island</li>
                </Link>
        </ul>
        </div>
    </nav>

    );
}

export default Nav;