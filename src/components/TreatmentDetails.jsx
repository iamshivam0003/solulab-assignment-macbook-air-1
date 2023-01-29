import React from 'react';
import '../styles/TreatmentDetails.css';
import {TreatmentData} from './SidebarData';
const TreatmentDetails = () =>{
    const treatmentMap = TreatmentData.map((value,index)=>{
        return(<div key={index} className="treatment-details-div">
                 <div className='treatment-card-div1'><p className='treatment-card-div1-p1'>{value.date}</p><p className='treatment-card-div1-p2'>{value.time}</p></div>
                 <div className='treatment-card-div2'><p className='treatment-card-div2-p1'>{value.title}</p><p className='treatment-card-div2-p2'>{value.treatmentName}</p></div>
                 <div className='treatment-card-div3'><p className='treatment-card-div3-p1'>{value.doctorType[0]}</p><p className='treatment-card-div3-p2'>{value.doctorName[0]}</p></div>
                 <div className='treatment-card-div4'><p className='treatment-card-div4-p1'>{value.doctorType[1]}</p><p className='treatment-card-div4-p2'>{value.doctorName[1]}</p></div>
                 <div className='treatment-card-div5'><img src={value.icon} alt="icon"/><span className='treatment-card-div5-span'>{value.note}</span></div>

        </div>);
    });
    return(
            <div className='treatment-main-div'>
            <div className='treatment-selector-div'>
            <button className='treatment-name'>Root Canal Treatment</button>
            <button className='treatment-history'>Show Previous Treatments</button>
            </div>
            
            {treatmentMap}
            
           
            </div>
    );
}
export default TreatmentDetails;
