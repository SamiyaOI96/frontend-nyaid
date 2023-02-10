import React from "react";
import './App.css';
import NewMA from './NewMA';
import MutualAid from './MutualAid';
import axios from 'axios';
import {useState,useEffect } from 'react';
import OneAid from "./OneAid";
import BoroughsList from "./BoroughsList";

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
    const [oneaidData, setOneAidData] = useState([]);
    
    
    const [selectedOneAid, setSelectedOneAid] = useState({
    // borough_name:'',
    borough: '',
    name: '',
    category:'',
    website:'',
    email:'',
    oneaid:[],
    id: 0
},[]);


  //getting all of the mutual aid 



useEffect(() => {
    console.log('hello')
    axios.get(`${API_URL}mutualaids/boroughs/?borough_id=2`,).then((response) => {
    setMutualAidData(response.data);
    });
}, []);

useEffect(()=>{
    console.log('broooo')
    axios.get(`${API_URL}boroughs/mutualaids/?borough_id=2`).then((response) => {
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
    axios.post(`${API_URL}mutualaids/boroughs/?borough_id=2`, newMA).then((response) => {
        console.log('Response:', response.data);
        const oneaid = [...oneaidData];
    oneaid.push(response.data);
    setOneAidData(oneaid);
    }).catch((error) => {
    console.log('Error: Couldn\'t create new mutualaid', error);
    alert('Couldn\'t create new Mutual aid')
})
}
// cd
  //deleting aid group 

//   http://127.0.0.1:5000/boroughs/mutualaids?borough_id=1&id=2
//deleting mutual aid from borough
const deleteOneAidItem = (oneaid) => {
console.log("in delete")

    axios.delete(`${API_URL}boroughs/mutualaids/?borough_id=2&${selectedOneAid.id}`).then((response) => {
        const newMAData = oneaidData.filter((existingOneAid) => {
            return existingOneAid.id !== oneaid.id
        })
        setOneAidData(newMAData)
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
    const onOneAidClick = (oneaid) => {
        console.log(onOneAidClick)
        axios.get(`${API_URL}boroughs/mutualaids/?borough_id=2&${oneaid.id}`).then((response) => {
            setSelectedOneAid(response.data);
            setOneAidData(response.data.oneaid);
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

    const oneaidElements=oneaidData.map((oneaid)=> {
        // console.log(mutualaid)
        // console.log(onMutualAidClick)
    
    return(
        <li key={oneaid.id}> 
        <OneAid oneaid={oneaid} onOneAidSelect={selectOneAid} onOneAidClick = {onOneAidClick}></OneAid>
        </li>
    )});

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
                    {/* {isMutualAidFormVisible ? <NewMA onMutualAidSubmit={onMutualAidSubmit} ></NewMA> : ""} */}
                {/* <div onClick={toggleNewMutualAidForm} className="aid__toggle">{isMutualAidFormVisible ? 'Hide New Mutual Aid Form' : 'Show New Mutual Aid Form'}</div> */}
                </div> 
                <div>
                <div className='MA__elements'>
                    {maElements}
                </div>
                <div className="new__BXMutualAid section ">
                    {isOneAidFormVisible ? <NewMA onOneAidSubmit={onOneAidSubmit} ></NewMA> : ""}
                <div onClick={toggleAidForm} className="aid__toggle">{isOneAidFormVisible ? 'Hide New Mutual Aid Form' : 'Display New Mutual Aid Form'}</div>
                </div> 
                <div></div>
                <div className='OneAid__elements'>
                    {oneaidElements}
                </div>
                <div className="woop__caidd">
            <BoroughsList oneaid={selectedOneAid} oneaidData={oneaidData} deleteOneAidItem={deleteOneAidItem} ></BoroughsList>
            </div>
                </div> 
                </div>
        </div>

    )
}

export default Bronx;