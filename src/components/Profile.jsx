import React from "react";
import '../styles/Profile.css';
import Profilepic from '../assets/Profilepic.png';
const Profile =()=>{
    return(
        <div className="profile-main-div">
            <div className="profile-photo-div">
                <img src={Profilepic} alt="Profile" className="profile-photo"/>
            </div>
            <h1 className="user-name">Diane Cooper</h1>
            <h3 className="user-email">diane.cooper@example.com</h3>
            <div className="user-count"><div className="past-count"><p>15</p><p>Past</p></div><div className="upcoming-count"><p>02</p><p>Upcoming</p></div></div>
            <button className="send-msg-btn">Send Message</button>
        </div>
    )
};
export default Profile;