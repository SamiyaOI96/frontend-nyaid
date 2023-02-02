import logo from './logo.svg';
import './App.css';
import NewMA from './NewMA';
import axios from 'axios';


const handleMASubmit=(data)=>{

}


//potentially creating a variable as some component in the page // be careful with validating if a borough is correct 


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Mutual Aids across the Boroughs</h1> 
      </header>
        
        <h2>Mutual Aid</h2>
        <div className="new__MA section">
            <NewMA>{handleMASubmit}</NewMA> 
        </div>
    </div>
  );
}

export default App;
