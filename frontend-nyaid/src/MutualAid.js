

const MutualAid = (props) => {


    return (
        <div className="mutualAidList__css" >
        {/* <div>Borough:{props.mutualaid.borough_name}</div> */}
        {/* <p className="aid__click" onClick={() => props.onMutualAidClick (props.mutualaid)}></p> */}
        
        
        <div className="MA_NAME">
        <div>Name:{props.mutualaid.name}</div>
        </div>
        
        <div className="MA_CATEGORY">
        <div>Category:{props.mutualaid.category}</div>
        </div>
        
        <div className="MA__WEB">
        <div>Website:<a href={props.mutualaid.website}>.{props.mutualaid.website}</a></div>
        
        {/* <div className="MA_EMAIL">
        <div>Email:{props.mutualaid.email}</div> 
        </div> */}
        
        </div>

        
{/*         
        <div className="MA_EMAIL">
        <div>Email:{props.mutualaid.email}</div> */}

        
        {/* </div> */}
        </div>
        
    );
};


export default MutualAid;