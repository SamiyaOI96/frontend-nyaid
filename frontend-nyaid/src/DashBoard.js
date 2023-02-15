import './App.css';
import React from 'react';


const DashBoard=()=>{
    return(
        <div>
            <div className='dashy_css'>
            <h3>Mutual Aid across the Boroughs</h3>
                <div className='header__ACK'>
                <h11>Land Acknowledgement</h11>
                </div>
                <div className='land__ACK'>
                <p>
                “The land upon which we gather is part of the traditional territory of the Lenni-Lenape, called “Lenapehoking.” 
                The Lenape People lived in harmony with one another upon this territory for thousands of years. 
                During the colonial era and early federal period, many were removed west and north, 
                but some also remain among the continuing historical tribal communities of the region: The Nanticoke Lenni-Lenape Tribal Nation; 
                the Ramapough Lenape Nation; and the Powhatan Renape Nation, The Nanticoke of Millsboro Delaware, and the Lenape of Cheswold Delaware. 
                We acknowledge the Lenni-Lenape as the original people of this land and their continuing relationship with their territory. 
                In our acknowledgment of the continued presence of Lenape people in their homeland, we affirm the aspiration of the great Lenape Chief Tamanend, 
                that there be harmony between the indigenous people of this land and the descendants of the immigrants to this land, “as long as the rivers and creeks flow, and the sun, moon, and stars shine.”
                </p>
                <div className='footer__ACK'>
                <a href="https://nlltribe.com/land-acknowledgement/"><footer>The Nanticoke Lenni-Lenape Tribal Nation</footer></a>
                
                </div>
            </div>
            </div>
        </div>
        //land acknowledgement at the bottom of the page with link to map the indegenious names of boroughs of ny

    )
}

export default DashBoard;