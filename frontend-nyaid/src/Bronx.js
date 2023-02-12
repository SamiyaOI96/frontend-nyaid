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
    const [ mutualaidData,setMutualAidData] = useState([]);
    
    
    
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

//   console.log('Response:', response.data);
//   const mutualaid = [...mutualaidData];
// mutualaid.push(response.data);
// fetch(`${API_URL}mutualaids/boroughs/?borough_id=2`)
// // .then((response) => {
// //     return response.json();
// //   })
// .then((response) => {
//        mutualaidData(response.data);
//     })

useEffect(() => {
    console.log('hello')
    axios.get(`${API_URL}mutualaids/boroughs/?borough_id=2`,).then((response) => {
    setMutualAidData(response.data)
    // mutualaidData(response.data)
    
    });
    
}, []);

console.log("mutualaid",mutualaidData)

useEffect(()=>{
    console.log('broooo')
    axios.get(`${API_URL}boroughs/mutualaids/?borough_id=2`).then((response) => {
    setOneAidData(response.data);
    
    });
}, []);
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


const onOneAidSubmit = (newMA) => {
    console.log(newMA)
    axios.post(`${API_URL}mutualaids/boroughs/?borough_id=2`, newMA).then((response) => {
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


const deleteOneAidItem = (oneaid) => {
console.log("in delete")

    axios.delete(`${API_URL}boroughs/mutualaids/?borough_id=2&id=${oneaid.id}`).then((response) => {
        console.log(mutualaidData);
        const newMAData = mutualaidData.filter((existingOneAid) => {
            return existingOneAid.id !== oneaid.id
        })
        // setMutualAidData(newMAData)
        //javascript error
        // console.log("mutualaiddata",mutualaidData)
        // take existing mutual aid state value
        // find item that matches the item that was deleted and remove it from that array
        // set state value with the updated list
        setMutualAidData([...newMAData])
        console.log("mutualaiddata",mutualaidData)
        console.log("trying delete",newMAData)
        // console.log("mutualaiddata",mutualaidData)
        setOneAidData([])
    }).catch((error) => {
        console.log('Error: Couldn\'t delete aid', error)
        alert('Couldn\'t delete aid')
    })
}



const onMutualAidClick = (mutualaid) => {
    console.log(onMutualAidClick)

    axios.get(`${API_URL}boroughs/mutualaids/?borough_id=2&${mutualaid.id}`).then((response) => {
        setMutualAidData([...mutualaidData]);
    }).catch((error) => {
        console.log('Error: Couldn\'t get all aid', error)
        alert('Couldn\'t get all aid')
    });
    };
    const onOneAidClick = (oneaid) => {
        console.log("clicking",onOneAidClick)
        axios.get(`${API_URL}boroughs/mutualaids/?borough_id=2&${oneaidData.id}`).then((response) => {
        setOneAidData(oneaid);
        // setMutualAidData([...mutualaidData, ...oneaid])
        }).catch((error) => {
            console.log('Error: Couldn\'t get all aid', error)
            alert('Couldn\'t get all aid')
        });
        };
    // boroughs/mutualaids/?borough_id=5&id=45
    const [isOneAidFormVisible, setIsOneAidFormVisible] = useState(true);
    

    const toggleAidForm = () => {
        setIsOneAidFormVisible(!isOneAidFormVisible)
    }
    const selectMutualAid = (mutualaid) => {
        setSelectedMutualAid(mutualaid)
    };
    const selectOneAid = (oneaid) => {
        setSelectedOneAid(oneaid)
    };

    

    

    return (
        <div>
            <div className='bronx__Css'>
            <h4>Bronx Mutual Aid</h4>
                <div className="new__BXMutualAid section ">
                    {/* {isMutualAidFormVisible ? <NewMA onMutualAidSubmit={onMutualAidSubmit} ></NewMA> : ""} */}
                {/* <div onClick={toggleNewMutualAidForm} className="aid__toggle">{isMutualAidFormVisible ? 'Hide New Mutual Aid Form' : 'Show New Mutual Aid Form'}</div> */}
                </div> 
                <div>
                
                </div>
                <div>
                <div className='MA__elements'>
                    {mutualaidData.map((mutualaid) => {
        console.log("checking items",mutualaid)
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
                <div className="new__BXMutualAid section ">
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

export default Bronx;