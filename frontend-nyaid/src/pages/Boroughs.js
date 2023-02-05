import { useState} from "react";


const Boroughs=(props)=>{
    const [newName,setNewName]=useState('');
    
    const handleNameChange=(event)=>{
        setNewName(event.target.value)
    };
    const handleNameSubmit=(event)=>{
        event.preventDefault();
        const staticBorough={
        "name":newName}
        props.onNameSubmit(staticBorough);
        setNewName('')
        ;
    }
    return(
        <div>
            Boroughs
        </div>
        // <form onSubmit={handleNameSubmit}>
        //     <ul>
        //         <li>
        //         <div className="Borough__buttons">
        //                 <label>''</label>
        //                 <input type="text" value={newName} onChange={handleNameChange}/>
            //     </div>
            //     </li>
            // </ul>

    
    )
}






export default Boroughs;
