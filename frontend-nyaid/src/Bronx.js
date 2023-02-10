import React from "react";
import './App.css';
import NewMA from './NewMA';
import MutualAid from './MutualAid';
import axios from 'axios';
import {useState,useEffect } from 'react';

const API_URL = "http://localhost:5000/";

function Bronx() {
    const [mutualaidData, setMutualAidData] = useState([]);
    
    
    const [selectedMutualAid, setSelectedMutualAid] = useState({
    // borough_name:'',
    borough: '',
    name: '',
    category:'',
    website:'',
    email:'',
    mutualaid:[],
    id: 0
},[]);



  //getting all of the mutual aid 



useEffect(() => {
    console.log('hello')
    axios.get(`${API_URL}mutualaids/boroughs/?borough_id=2`,).then((response) => {
    setMutualAidData(response.data);
    });
}, []);
// ${selectedMutualAid.id}

// /mutualaids/boroughs/?borough_id=1
// const onBoardSubmit = (newBoard) => {
//     console.log(newBoard)
//     axios.post(`${url}/boards`, newBoard).then((response) => {
//       console.log('Response:', response.data);
//       const boards = [...boardsData];
//       boards.push(response.data);
//       setBoardsData(boards);
//     }).catch((error) => {
//       console.log('Error: Couldn\'t create new board', error);
//       alert('Couldn\'t create new board')
//     })
//   }

const onMutualAidSubmit = (newMA) => {
    console.log(newMA)
    axios.post(`${API_URL}mutualaids/boroughs/?borough_id=2`, newMA).then((response) => {
        console.log('Response:', response.data);
        const mutualaid = [...mutualaidData];
    mutualaid.push(response.data);
    setMutualAidData(mutualaid);
    }).catch((error) => {
    console.log('Error: Couldn\'t create new mutualaid', error);
    alert('Couldn\'t create new Mutual aid')
})
}

useEffect (() => {
    if  (!selectedMutualAid.id) {
        return;
    }
    axios.get(`${API_URL}boroughs/mutualaids?${selectedMutualAid.id}/?borough_id=2`).then((response) => {
        setMutualAidData(response.data.mutualaid);
    }).catch((error) => {
        console.log('Error: Couldn\'t get all mutualaid', error)
        alert('Couldn\'t get all mutualaid')
    });
}, [selectedMutualAid.id]);
  //deleting aid group 

//   http://127.0.0.1:5000/boroughs/mutualaids?borough_id=1&id=2
//deleting mutual aid from borough
const deleteMutualAidItem = (mutualaid) => {
console.log("in delete")
    axios.delete(`${API_URL}mutualaids/boroughs/?borough_id=2${selectedMutualAid.id}`).then((response) => {
        const newMAData = mutualaidData.filter((existingMutualAid) => {
            return existingMutualAid.id !== mutualaid.id
        })
        setMutualAidData(newMAData)
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

    axios.get(`${API_URL}mutualaids/boroughs/?borough_id=2/${mutualaid.id}`).then((response) => {
        setSelectedMutualAid(response.data);
        setMutualAidData(response.data.mutualaid);
    }).catch((error) => {
        console.log('Error: Couldn\'t get all aid', error)
        alert('Couldn\'t get all aid')
    });
    };


    const [isMutualAidFormVisible, setIsMutualAidFormVisible] = useState(true);
    const toggleNewMutualAidForm = () => {
    setIsMutualAidFormVisible(!isMutualAidFormVisible)
    };
    const selectMutualAid = (mutualaid) => {
        setSelectedMutualAid(mutualaid)
    };
    const maElements = mutualaidData.map((mutualaid) => {
        // console.log(mutualaid)
        // console.log(onMutualAidClick)
    return(
        <li key={mutualaid.id}> 
        <MutualAid mutualaid={mutualaid} onMutualAidSelect={selectMutualAid} onMutualAidClick = {onMutualAidClick}></MutualAid>
        </li>
    )});

    return (
        <div>
            <div className='bronx__Css'>
            <h4>Bronx Mutual Aid</h4>
                <div className="new__BXMutualAid section ">
                    {isMutualAidFormVisible ? <NewMA onMutualAidSubmit={onMutualAidSubmit} deleteMutualAidItem={deleteMutualAidItem}></NewMA> : ""}
                <div onClick={toggleNewMutualAidForm} className="aid__toggle">{isMutualAidFormVisible ? 'Hide New Mutual Aid Form' : 'Show New Mutual Aid Form'}</div>
                </div> 
                <div>
                <div className='MA__elements'>
                    {maElements}
                </div>
                </div> 
                </div>
        </div>

    )
}

export default Bronx;