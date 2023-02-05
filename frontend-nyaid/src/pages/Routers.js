import { Navigate } from 'react-router-dom'
import DashBoard from "./DashBoard";
import Boroughs from "./Boroughs";
import FourOhFour4 from "./404";


export const routes =[
    {
    element:<DashBoard/>, //takes a react component
    path:"/",
    },
    
    { 
    element:<Boroughs/>,
    path:"/boroughs",
    
    },
    
    {
        path:'/404',
        element:<FourOhFour4/>,
    },
    {
        path:'*',
        element:<Navigate to="/404" replace/>,

    },
    
]