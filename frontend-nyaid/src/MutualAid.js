
const MutualAid = (props) => {


    return (
        <div className="mutualAidList__css" onClick={() => props.deleteMutualAidItem(props.mutualAid)}>
        
        <div>Name:{props.mutualaid.name}</div>
        
        <div>Category:{props.mutualaid.category}</div>
        
        <div>Website:{props.mutualaid.website}</div>
        
        <div>Email:{props.mutualaid.email}</div>
        </div>
    );
};


export default MutualAid;