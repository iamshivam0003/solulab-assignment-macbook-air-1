import React from "react";
import '../styles/LastGridDiv.css';
import UserInfo from './UserInfo';
import Appointments from './Appointments';
import TreatmentDetails from './TreatmentDetails';
const LastGridDiv = () =>{
    return( 
    <div className="last-grid-div">
         <UserInfo/>
        <Appointments/>
        <TreatmentDetails/>
    </div>
    )
}
export default LastGridDiv;