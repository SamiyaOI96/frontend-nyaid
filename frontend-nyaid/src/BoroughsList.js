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
            <section className='list__container'>
                <section>
                    <h2>New Mutual Aid : </h2>
                    {/* {props.oneaidData.name} */}
                    {/* <div> {oneaidElements}</div> */}
                    <div> {oneaidElements}</div>

            
                </section>
            </section>
            
        )



};

export default BoroughsList;