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

const API_URL = "http://localhost:5000/nyc/";
const handleMASubmit=(data)=>{

}

//adding land acknowledgement at the bottom of the home page
//potentially creating a variable as some component in the page // be careful with validating if a borough is correct 


function App() {
  return (
    <div className="App">
      <Nav/>
      <Brooklyn/>
      <Bronx/>
      <Manhattan/>
      <Queens/>
      <StatenIsland/>
      
            
    </div>
  );
}



export default App;
