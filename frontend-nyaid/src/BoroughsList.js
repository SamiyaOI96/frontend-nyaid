import axios from 'axios';
import OneAid from './OneAid';
import NewMA from './NewMA';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const API_URL = "http://localhost:5000/";

const BoroughsList=(props)=>{


    // const cardElements = props.cardsData.map((card) => {
    //     return (<Card card={card}
    //         plusOneCardItem={props.plusOneCardItem}
    //         deleteCardItem={props.deleteCardItem}
    //         likes={card.likes}
    //         //passing it as a prop to card
    //     ></Card>)
    
        const oneaidElements = props.oneaidData.map((oneaid) => {
            return (<OneAid oneaid={oneaid}
                deleteMutualAidItem={props.OneAidItem}
                //passing it as a prop to card
            ></OneAid>)
        })


    
    
        return (
            <section className='cards__container'>
                <section>
                    <h2>Recently added Mutual Aid : {props.oneaid.name} </h2>
                    <div className='single-items__container'>
        
                    <div>Name:{props.oneaid.name}</div>
        
                    <div>Category:{props.oneaid.category}</div>
        
                    <div>Website:{props.oneaid.website}</div>
        
                    <div>Email:{props.oneaid.email}</div>
                        {oneaidElements}
                    </div>
                </section>
            </section>
            
        )



};

// export default CardList;
export default BoroughsList;