import './App.css';
// import NewMA from './NewMA';
import axios from 'axios';
import ReactDOM from 'react-dom';
import 'react-router-dom'
import Nav from './Nav';
import Brooklyn from './Brooklyn';
import Bronx from './Bronx';
import Manhattan from './Manhattan';
import Queens from './Queens';
import StatenIsland from './StatenIsland';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import DashBoard from './DashBoard';


// const API_URL = "http://localhost:5000/";

function App() {
    
  return (
    <Router>
    <div className="App">
        <Nav/>
        <Routes>
            <Route path='/' exact element={<DashBoard/>}/>
            <Route path='/brooklyn' element={<Brooklyn/>}/>
            <Route path='/bronx' element={<Bronx/>}/>
            <Route path='/manhattan' element={<Manhattan/>}/>
            <Route path='/queens' element={<Queens/>}/>
            <Route path='/statenisland' element={<StatenIsland/>}/>
        </Routes>
        </div>
    </Router>
  
        
            
  );
};





export default App;
