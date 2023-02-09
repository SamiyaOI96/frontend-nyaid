const MutualAid = (props) => {


    return (
        <div className="mutualAidList__css" onClick={() => props.deleteMutualAidItem(props.mutualAid)}>
        <div>{props.mutualaid.borough}</div>
        <div>{props.mutualaid.name}</div>
        <div>{props.mutualaid.category}</div>
        <div>{props.mutualaid.website}</div>
        <div>{props.mutualaid.email}</div>
        </div>
    );
};


export default MutualAid;