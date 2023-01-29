import React from "react";
import '../styles/List.css';
import { ListData } from "./SidebarData";
import fileimg from '../assets/fileimg.png';

const List =()=>{
    const listdata = ListData.map((value,ind)=>{
        return(<div className="list-div"><img src={fileimg} alt="icon" className="file-img"/><span className="file-name">{value.title}</span></div>)
    })
    return(
            <div className="document-div">
                <p className="list-heading">Files / Documents</p>          
                {listdata}
            </div>
    );
}
export default List;