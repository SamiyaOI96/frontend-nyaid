// const [isMutualAidFormVisible, setIsMutualAidFormVisible] = useState(true);

//   const toggleNewBoardForm = () => {
//     setIsMutualAidFormVisible(!isMutualAidFormVisible)
//   };





// const [mutualaidData, setBoardsData] = useState([]);
//   const [selectedMutualAid, setSelectedMutualAid] = useState({
//     borough: '',
//     name: '',
//     category:'',
//     website:'',
//     email:'',
//     mutualaid:[],
//     id: 0
//   },[]);

// const selectMutualAid = (mutualaid) => {
//     setSelectedMutualAid(mutualaid)
//   };
// const maElements = mutualaidData.map((mutualaid) => {
//     // console.log(mutualaid)
//     // console.log(onMutualAidClick)
//     return (
//       <li key={mutualaid.id}> 
//         <MutualAid mutualaid={mutualaid} onMutualAidSelect={selectMutualAid} onMutualAidClick = {onMutualAidClick}></MutualAid>
//       </li>
//     )
//   });
// const deleteMutualAidItem = (mutualaid) => {
//     console.log("in delete")
//       axios.delete(`${url}/cards/${mutualaid.id}`).then((response) => {
//           const newMAData = mutualaidData.filter((existingMutualAid) => {
//               return existingMutualAid.id !== mutualaid.id
//           })
//           setMutualAidData(NewMAData)
//       }).catch((error) => {
//           console.log('Error: Couldn\'t delete aid', error)
//           alert('Couldn\'t delete aid')
//       })
//   }
// useEffect (() => {
//     if  (!selectedMutualAid.id) {
//         return;
//     }
//     axios.get(`${url}/boards/${MutualAid.id}/cards`).then((response) => {
//         setMutualAidData(response.data.mutualaid);
//     }).catch((error) => {
//         console.log('Error: Couldn\'t get all mutualaid', error)
//         alert('Couldn\'t get all mutualaid')
//     });
// }, [selectedMutualAid]);

// const onMutualAidSubmit = (newMA) => {
//     console.log(newMA)
//     axios.post(`${url}/boards`, newMA).then((response) => {
//       console.log('Response:', response.data);
//       const mutualaid = [...mutualaidData];
//       mutualaid.push(response.data);
//       setMutualAidData(mutualaid);
//     }).catch((error) => {
//       console.log('Error: Couldn\'t create new mutualaid', error);
//       alert('Couldn\'t create new Mutual aid')
//     })
//   }


//in the return statement

// useEffect(() => {
//     console.log("getting aid")
//     axios.get(`${url}/mutualaid`, {}).then((response) => {
//       setMutualAidData(response.data);
//     });
//   }, [mutualaidData]);

//   const onMutualAidClick = (board) => {
//     console.log(onMutualAidClick)
//     axios.get(`${url}/mutualaid/${mutualaid.id}`).then((response) => {
//       setSelectedMutualAid(response.data);
//       setMutualaidData(response.data.mutualaid);
//   }).catch((error) => {
//       console.log('Error: Couldn\'t get all aid', error)
//       alert('Couldn\'t get all aid')
//   });
//   };




                // VisibleForm={isMutualAidFormVisible ? <NewMA onMutualAidSubmit={onMutualAidSubmit} deleteMutualAidItem={deleteMutualAidItem}></NewMA> : ""}
                // onClick={toggleNewMutualAidForm} className="aid__toggle">{isMutualAidFormVisible ? 'Hide New Mutual Aid Form' : 'Show New Mutual Aid Form'}




        //         <div className="displayAID__item">
        //     <p className="AID__item__message">{props.oneaid.name} </p>
        //     <ul>
        //         <li><p className="MA__item__delete" onClick={() => props.deleteOneAidItem(props.oneaid)}>Delete</p></li>
        //     </ul>
        // </div>
// setSelectedOneAid(response.data.oneaidData)



        //borooguhslist
        // /whatever
    
        // return (
        //     <section className='cards__container'>
        //         <section>
        //             {oneaidElements}
        //             {/* <h2>Recently added Mutual Aid : {props.oneaidData.name} </h2>
        //             <div className='single-items__container'>
        
        //             <div>Name:{props.oneaid.name}</div>
                    
        
        //             <div>Category:{props.oneaid.category}</div>
        
        //             <div>Website:{props.oneaid.website}</div>
        
        //             <div>Email:{props.oneaid.email}</div>
        //             //  */}
                
        //         </section>
        //     </section>