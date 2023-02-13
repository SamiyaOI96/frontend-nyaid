



const OneAid = (props) => {
    return(
        <div className="displayAID__item">
            <div className="AID__item__message">
            <ul>
                <div className="displaying_Aid">
                <li>Name:{props.oneaid.name} </li>
                <li>Category:{props.oneaid.category} </li>
                <li>Website:<a href={props.oneaid.website}>.{props.oneaid.website}</a> </li>
                <li>Email:{props.oneaid.email} </li>
                </div>
            </ul>
                
            <p className="MA__item__delete" onClick={() => props.deleteOneAidItem(props.oneaid)}><div className="delete__butt"><button type="button">Delete</button></div></p>

            </div>
        </div>
    );
};


export default OneAid;