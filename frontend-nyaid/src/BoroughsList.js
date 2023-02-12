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

//
    
    
        return (
            <section className='list__container'>
                <section>
                    <h2>Recently added Mutual Aid : {props.oneaidData.name} </h2>
                    
                    <div> {oneaidElements}</div>

                    
                    {/* <div className='single-items__container'>
        
                    <div>Name:{props.oneaid.name}</div>
                    
        
                    <div>Category:{props.oneaid.category}</div>
        
                    <div>Website:{props.oneaid.website}</div>
        
                    <div>Email:{props.oneaid.email}</div>
                    
                    </div> */}
                </section>
            </section>
            
        )



};

// export default CardList;
export default BoroughsList;