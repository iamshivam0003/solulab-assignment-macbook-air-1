import React from "react";
import '../styles/MiddleGridDiv.css'
import Profile from './Profile';
import List from './List';
const MiddleGridDiv=()=>{
    return(
            <div className="middle-grid-div">
                <Profile/>
                <List/>
            </div>
    )
}
export default MiddleGridDiv;