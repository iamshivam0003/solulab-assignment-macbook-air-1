import React from "react";
 import '../styles/Appointments.css';
 import { AppointmentData } from "./SidebarData";
const Appointments = () =>{
    const appointmentMap = AppointmentData.map((value,index)=>{
        return(<div key ={index} className="appointment-sub-div"><p>{value.title}</p></div>)
    })
    return(
            <div className="appointment-main-div">
                {appointmentMap}
            </div>
    );
}

export default Appointments;