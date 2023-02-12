import './App.css';
import React from 'react';
import NewMA from './NewMA';
import MutualAid from './MutualAid';
import axios from 'axios';
import BoroughsList from './BoroughsList';
import {useState,useEffect } from 'react';

const API_URL = "http://localhost:5000/";
function Manhattan() {
    const [mutualaidData, setMutualAidData] = useState([]);
    
    
    const [selectedMutualAid, setSelectedMutualAid] = useState({
    // borough_name:'',
    borough: '',
    name: '',
    category:'',
    website:'',
    email:'',
    // mutualaid:[],
    id: 0
},[]);
    const [oneaidData, setOneAidData] = useState([]);
    
    
    const [selectedOneAid, setSelectedOneAid] = useState({
    // borough_name:'',
    borough: '',
    name: '',
    category:'',
    website:'',
    email:'',
    id: 0
},[]);


  //getting all of the mutual aid 



useEffect(() => {
    console.log('hello')
    axios.get(`${API_URL}mutualaids/boroughs/?borough_id=3`,).then((response) => {
    setMutualAidData(response.data);
    // setOneAidData(mutualaidData);
    });
}, []);

useEffect(()=>{
    console.log('broooo')
    axios.get(`${API_URL}boroughs/mutualaids/?borough_id=3`).then((response) => {
    setOneAidData(response.data);
    });
}, []);



// const onMutualAidSubmit = (newMA) => {
//     console.log(newMA)
//     axios.post(`${API_URL}mutualaids/boroughs/?borough_id=2`, newMA).then((response) => {
//         console.log('Response:', response.data);
//         const mutualaid = [...mutualaidData];
//     mutualaid.push(response.data);
//     setMutualAidData(mutualaid);
//     }).catch((error) => {
//     console.log('Error: Couldn\'t create new mutualaid', error);
//     alert('Couldn\'t create new Mutual aid')
// })
// }
const onOneAidSubmit = (newMA) => {
    console.log(newMA)
    axios.post(`${API_URL}mutualaids/boroughs/?borough_id=3`, newMA).then((response) => {
        console.log('Response:', response.data);
        const oneaid = [...oneaidData];
        oneaid.push(response.data);
    console.log("test",oneaid)
    setOneAidData(oneaid);
    setMutualAidData([...mutualaidData, ...oneaid])
    console.log("HI",mutualaidData)
    console.log("YP",oneaid)
    }).catch((error) => {
    console.log('Error: Couldn\'t create new mutualaid', error);
    alert('Couldn\'t create new Mutual aid')
})
}
//add a field for the user 
// cd
  //deleting aid group 
//
//   http://127.0.0.1:5000/boroughs/mutualaids?borough_id=1&id=2
//deleting mutual aid from borough
const deleteOneAidItem = (oneaid) => {
console.log("in delete")

    axios.delete(`${API_URL}boroughs/mutualaids/?borough_id=3&id=${oneaid.id}`).then((response) => {
        
        const newMAData = oneaidData.filter((existingOneAid) => {
            return existingOneAid.id === oneaid.id
        })
        setMutualAidData(newMAData)
        console.log("trying delete",newMAData)
        setOneAidData(oneaid)
    }).catch((error) => {
        console.log('Error: Couldn\'t delete aid', error)
        alert('Couldn\'t delete aid')
    })
}

  //getting all of the mutual aid

  // getting all of the mutual ai
  //http://127.0.0.1:5000/boroughs/mutualaids?borough_id=1&id=2

const onMutualAidClick = (mutualaid) => {
    console.log(onMutualAidClick)

    axios.get(`${API_URL}mutualaids/boroughs/?borough_id=3/${mutualaid.id}`).then((response) => {
        // setOneAidData(oneaid);
        setMutualAidData([...mutualaidData]);
    }).catch((error) => {
        console.log('Error: Couldn\'t get all aid', error)
        alert('Couldn\'t get all aid')
    });
    };
    const onOneAidClick = (oneaid) => {
        console.log("clicking",onOneAidClick)
        axios.get(`${API_URL}boroughs/mutualaids/?borough_id=3&${oneaidData.id}`).then((response) => {
        setOneAidData(oneaid);
        // setMutualAidData([...mutualaidData, ...oneaid])
        }).catch((error) => {
            console.log('Error: Couldn\'t get all aid', error)
            alert('Couldn\'t get all aid')
        });
        };
    // boroughs/mutualaids/?borough_id=5&id=45
    const [isOneAidFormVisible, setIsOneAidFormVisible] = useState(true);
    
    // const [isMutualAidFormVisible, setIsMutualAidFormVisible] = useState(true);
    
    // const toggleNewMutualAidForm = () => {
    // setIsMutualAidFormVisible(!isMutualAidFormVisible)
    // };
    const toggleAidForm = () => {
        setIsOneAidFormVisible(!isOneAidFormVisible)
    }
    const selectMutualAid = (mutualaid) => {
        setSelectedMutualAid(mutualaid)
    };
    const selectOneAid = (oneaid) => {
        setSelectedOneAid(oneaid)
    };

    // oneaidData.map((oneaid)=> {
        // console.log(mutualaid)
        // console.log(onMutualAidClick)
    
    // return(
    //     <li key={oneaid.id}> 
    //     <OneAid oneaid={oneaid} onOneAidSelect={selectOneAid} onOneAidClick = {onOneAidClick}></OneAid>
    //     </li>
    // )});

    

    return (
        <div>
            <div className='nyc__Css'>
            <h4>Manhattan Mutual Aid</h4>
                <div className="new__BXMutualAid section ">
                    {/* {isMutualAidFormVisible ? <NewMA onMutualAidSubmit={onMutualAidSubmit} ></NewMA> : ""} */}
                {/* <div onClick={toggleNewMutualAidForm} className="aid__toggle">{isMutualAidFormVisible ? 'Hide New Mutual Aid Form' : 'Show New Mutual Aid Form'}</div> */}
                </div> 
                <div>
                
                </div>
                <div>
                <div className='NYC__elements'>
                    {mutualaidData.map((mutualaid) => {
        // console.log(mutualaid)
        // console.log(onMutualAidClick)
        // console.log("in here")             
        return(
        <li key={mutualaid.id}> 
        <MutualAid mutualaid={mutualaid} onMutualAidSelect={selectMutualAid} onMutualAidClick = {onMutualAidClick}></MutualAid>
        </li>
    )})}
                </div>
                {/* {oneaidData.map((oneaid)=> {
    
    return(
        <li key={oneaid.id}> 
    <OneAid oneaid={oneaid} onOneAidSelect={selectOneAid} onOneAidClick = {onOneAidClick}></OneAid>
    </li>
    )})} */}
                <div className="new__NYCMutualAid section ">
                    {isOneAidFormVisible ? <NewMA onOneAidSubmit={onOneAidSubmit} ></NewMA> : ""}
                <div onClick={toggleAidForm} className="aid__toggle">{isOneAidFormVisible ? 'Hide New Mutual Aid Form' : 'Display New Mutual Aid Form'}</div>
                </div> 
                <div></div>
                <div className='OneAid__elements'>
                </div>
                <div className="woop__caidd">
            <BoroughsList oneaid={selectedOneAid} oneaidData={oneaidData} deleteOneAidItem={deleteOneAidItem} ></BoroughsList>
            </div>
                </div> 
                </div>
        </div>

    )
}

export default Manhattan;