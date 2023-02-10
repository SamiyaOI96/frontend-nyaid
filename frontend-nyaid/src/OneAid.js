



const OneAid = (props) => {
    return(
        <div className="displayAID__item">
            <p className="AID__item__message">{props.oneAid} </p>
            <ul>
                <li><p className="MA__item__delete" onClick={() => props.deleteOneAidItem(props.oneAid)}>Delete</p></li>
            </ul>
        </div>
    );
};


export default OneAid;