import React from "react";
import { UserInfoData } from "./SidebarData";
import '../styles/UserInfo.css'
const UserInfo =()=>{
const userInfoMap = UserInfoData.map((curvalue,index)=>{
    return( <div key ={index} className="user-info-div"><p className="title">{curvalue.Title}</p><p className="value">{curvalue.value}</p></div>);
})
    return(
            <div className="user-info-main-div">
                {userInfoMap}
            </div>
    )
};

export default UserInfo;