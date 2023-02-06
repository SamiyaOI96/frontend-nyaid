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
// export {Switch} from 'react-router-dom'


const API_URL = "http://localhost:5000/nyc/";
const handleMASubmit=(data)=>{

}

//adding land acknowledgement at the bottom of the home page
//potentially creating a variable as some component in the page // be careful with validating if a borough is correct 


function App() {
  return (
    <Router>
    <div className="App">
        <Nav/>
        <h2>Mutual Aid across the Boroughs</h2>
        <Routes>
            <Route path='/' exact component={DashBoard}/>
            <Route path='/brooklyn' component={Brooklyn}/>
            <Route path='/bronx' component={Bronx}/>
            <Route path='/manhattan' component={Manhattan}/>
            <Route path='/queens' component={Queens}/>
            <Route path='/statenisland' component={StatenIsland}/>
        </Routes>
        </div>
    </Router>
  
        
            
  );
}



export default App;
