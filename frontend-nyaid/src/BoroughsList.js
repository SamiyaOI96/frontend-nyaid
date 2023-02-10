import axios from 'axios';
import MutualAid from './MutualAid';
import NewMA from './NewMA';
import { useState, useEffect } from 'react';
const API_URL = "http://localhost:5000/";

const BoroughsList=(props)=>{
//     const boroughElements=props.mutualaidData.map((mutualaid)=>{
//         return(<MutualAid mutualaid={mutualaid}
//         deleteMutualAidItem={props.deleteMutualAidItem}
//         ></MutualAid>)
//     }




// }



//     const cardElements = props.cardsData.map((card) => {
//         return (<Card card={card}
//             plusOneCardItem={props.plusOneCardItem}
//             deleteCardItem={props.deleteCardItem}
//             likes={card.likes}
//             //passing it as a prop to card
//         ></Card>)
//     })


//     return (
//         <section className='cards__container'>
//             <section>
//                 <h2>Cards for : {props.board.title} </h2>
//                 <div className='card-items__container'>
//                     {cardElements}
//                 </div>
//             </section>
//         </section>
        
//     )
};

// export default CardList;
export default BoroughsList;