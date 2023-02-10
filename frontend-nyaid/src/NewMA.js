import { useState } from "react";

const NewMA=(props)=>{
    // const [newBorough,setNewBorough]=useState('');
    const [newBoroughName,setNewBoroughName]=useState('');
    const [newName,setNewName]=useState('');
    const [newCategory,setNewCategory]=useState('');
    const [newWebsite,setNewWebsite]=useState('');
    const [newEmail,setNewEmail]=useState('');
    

    const handleBoroughNameChange = (event) => {
        setNewBoroughName(event.target.value)
    };

    // const handleBoroughChange = (event) => {
    //     setNewBorough(event.target.value)
    // };

    const handleNameChange=(event)=>{
        setNewName(event.target.value)
    };
    const handleCategoryChange = (event) => {
        setNewCategory(event.target.value)
    };
    const handleWebsiteChange=(event)=>{
        setNewWebsite(event.target.value)
    };
    const handleEmailChange = (event) => {
        setNewEmail(event.target.value)
    };
    const handleNewMASubmit=(event)=>{
        event.preventDefault();
        const newMA={
        "borough_name":newBoroughName,
        // "borough":newBorough,
        "name":newName,
        "category":newCategory,
        "website":newWebsite,
        "email":newEmail}
        props.onMutualAidSubmit(newMA);
        setNewBoroughName('')
        // setNewBorough('')
        setNewName('')
        setNewCategory('')
        setNewWebsite('')
        setNewEmail('')
        ;
    
    }
    return (
        //<div className="new-card">
            //<h2>Create a New Card</h2>
            //form="new-card-form">
            //onSelect={borough,borough_name} take in the id and the borough_name and then 
            <form onSubmit={handleNewMASubmit}>
                <div className="newMA__form">
                <ul>
                    <div className="Boxes__aid">
                    <li>
                    <div className="newMA__buttons">
                        <label>Borough</label>
                        <input type="text" value={newBoroughName} onChange={handleBoroughNameChange}/>
                    </div>
                    {/* <div className="newMA__buttons">
                        <label>Borough</label>
                        <input select="text" value={newBorough} onChange={handleBoroughChange}/>
                    </div> */}
                    </li>
                    <li>
                    <div className="newMA__buttons">
                        <label>Name</label>
                        <input type="text" value={newName} onChange={handleNameChange}/>
                    </div>
                    </li>
                    <li>
                    <div className="newMA__buttons">
                        <label>Category</label>
                        <input type="text" value={newCategory} onChange={handleCategoryChange}/>
                    </div>
                    </li>
                    <li>
                    <div className="newMA__buttons">
                        <label>Website</label>
                        <input type="text" value={newWebsite} onChange={handleWebsiteChange}/>
                    </div>
                    </li>
                
                    <li>
                    <div className="newMA__buttons">
                        <label>Email</label>
                        <input type="text" value={newEmail} onChange={handleEmailChange}/>
                        <div><input type="submit" value="Submit"/></div>
                    </div>
                    </li>
                    </div>
                </ul>
                </div>
            </form>
        //</div>
    )
}













export default NewMA;