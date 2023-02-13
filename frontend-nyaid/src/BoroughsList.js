import axios from 'axios';
import OneAid from './OneAid';
import NewMA from './NewMA';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const API_URL = "http://localhost:5000/";

const BoroughsList=(props)=>{
    console.log("checking",props)
    //prior to deleting it was array and then became one object after checking!!!
    console.log("one aid",props.oneaidData)
        const oneaidElements = props.oneaidData.map((oneaid) => {
            return (<OneAid oneaid={oneaid}
                deleteOneAidItem={props.deleteOneAidItem}
                // onOneAidClick={props.onOneAidClick}

                //passing it as a prop to card
            ></OneAid>)
            
        })
        console.log("checking info",OneAid)
//
    
    
        return (
                <div className='alterting__newaid'> 
                    <h2>New Mutual Aid </h2>
                
                    {/* <div> {oneaidElements}</div> */}
                    <div className='one__elements'>{oneaidElements}</div>
                </div>
        )



};

export default BoroughsList;