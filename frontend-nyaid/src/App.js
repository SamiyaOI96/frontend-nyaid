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
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom';
import DashBoard from './DashBoard';
import BoroughsList from './BoroughsList';
import FourOhFour4 from './404';


// const API_URL = "http://localhost:5000/";

function App() {
  // {
  //   path: "/404",
  //   element: <FourOhFour />,
  // },
  // {
  //   path: "*",
  //   element: <Navigate to="/404" replace />,
  return (
    <Router>
    <div className="App">
        <Nav/>
        <Routes>
            <Route path='/' exact element={<DashBoard/>}/>
            <Route path='/404' element={<FourOhFour4/>}/>
            <Route path='/brooklyn' element={<Brooklyn/>}/>
            {/* <Route path='*' element={<Navigate to="/404" replace/>}/> */}
            <Route path='/bronx' element={<Bronx/>}/>
            <Route path='/manhattan' element={<Manhattan/>}/>
            <Route path='/queens' element={<Queens/>}/>
            <Route path='/statenisland' element={<StatenIsland/>}/>
            {/* <Route path='/mutualaids/id' element={<BoroughsList/>}/> */}
        </Routes>
        </div>
    </Router>
  
        
            
  );
};





export default App;
