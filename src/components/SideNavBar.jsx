import React from "react";
import '../styles/SideNavBar.css';
import '../assets/add.png';
import  '../assets/user.png';
import '../assets/folder.png';
import '../assets/upload.png';
import '../assets/report.png';
import  '../assets/setting.png';
import  '../assets/logout.png';
import  Vectorstroke from '../assets/Vectorstroke.png';
import { SidebarData } from "./SidebarData";
const SideNavBar = () => {
        const sideBarMap = SidebarData.map((value,index)=>{
                return(<li key={index} className="sidenavbar-content-list"><img src={value.icon} alt ='s' className="sidenavbar-img"/><p>{value.title}</p></li>)
        })
    return(
            <div id = "rectangle-5732" className="side-navbar-container">
             <div id = "rectangle-5736" className="side-navbar-head">
                 <img src={Vectorstroke} alt="Sidenavbarhead" className="vectorimg"/>
                </div>
                         <ul className="side-navbar-contents">
                            {sideBarMap}
                         </ul>               
            </div>
    );
}

export default SideNavBar;
