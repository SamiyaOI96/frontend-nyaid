



const OneAid = (props) => {
    return(
        <div className="displayAID__item">
            <div className="AID__item__message">
            <ul>
                <li>Name:{props.oneaid.name} </li>
                <li>Category:{props.oneaid.category} </li>
                <li>Website:{props.oneaid.website} </li>
                <li>Email:{props.oneaid.email} </li>

            </ul>
                
            
            
            <ul>
                <li><p className="MA__item__delete" onClick={() => props.deleteOneAidItem(props.oneaid)}>Delete</p></li>
            </ul>
            </div>
        </div>
    );
};


export default OneAid;