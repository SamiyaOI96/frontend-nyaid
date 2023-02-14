import './App.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'


function Nav() {
    const navStyle={
        color:'white',
        textDecoration: "none",
    };
    // const linkUnder={
    //     text-decoration: none;
    // }
    return (
    <nav>
        <div className="nav__links">
        <div className="flower__png"></div>
        
        <ul>
            <div className='new__linky'>

                <Link style={navStyle} to='/'>
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
                
                <Link style={navStyle} to='/statenisland'>
                    <li>Staten Island</li>
                </Link>
                </div>
        </ul>
        {/* <div className="flower__png"></div> */}
        </div>
    </nav>

    );
}

export default Nav;