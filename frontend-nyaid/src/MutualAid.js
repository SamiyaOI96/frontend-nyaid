

const MutualAid = (props) => {


    return (
        <div className="mutualAidList__css" >
        {/* <div>Borough:{props.mutualaid.borough_name}</div> */}
        <li><p className="aid__click" onClick={() => props.onMutualAidClick (props.mutualaid)}>click</p></li>
        
        <div>Name:{props.mutualaid.name}
        
        {/* <div>Category:{props.mutualaid.category}</div>
        
        <div>Website:{props.mutualaid.website}</div>
        
        <div>Email:{props.mutualaid.email}</div> */}
        </div>
        </div>
    );
};


export default MutualAid;