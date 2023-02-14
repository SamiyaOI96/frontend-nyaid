



const OneAid = (props) => {
    return(
        <div className="displayAID__item">
            <div className="AID__item__message">
                <ul>
                    <div className="displaying_Aid">
                        <li>
                            <div className="name__proppy">
                                Name:{props.oneaid.name} 
                            </div>
                        </li>
                        
                        <li>
                            <div className="cat__proppy">
                            Category:{props.oneaid.category} 
                            </div>
                        </li>
                        
                        <li>
                            <div className="web__proppy">
                            Website:<a href={props.oneaid.website}>.{props.oneaid.website}</a> 
                            </div>
                        </li>
                        
                        <li>
                            <div className="email__proppy">
                            Email:{props.oneaid.email} 
                            </div>
                        </li>
                    </div>
                </ul>
                
            <p className="MA__item__delete" onClick={() => props.deleteOneAidItem(props.oneaid)}><div className="delete__butt"><button type="button">Delete</button></div></p>

            </div>
        </div>
    );
};


export default OneAid;