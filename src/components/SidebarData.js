// NEW PATIENT FOLDER UPLOAD REPORT SETTING LOGOUT
import '../assets/add.png';
import  '../assets/user.png';
import '../assets/folder.png';
import '../assets/upload.png';
import '../assets/report.png';
import  '../assets/setting.png';
import  '../assets/logout.png';
import '../assets/fileimg.png'
export const SidebarData = [
{
    title : "NEW",
    icon : require("../assets/add.png"),
    
},
{
    title : "PATIENT",
    icon : require("../assets/user.png"),
},
{
    title : "FOLDER",
    icon : require("../assets/folder.png"),
},
{
    title : "UPLOAD",
    icon : require("../assets/upload.png"),
},
{
    title : "REPORT",
    icon : require("../assets/report.png"),
},
{
    title : "SETTING",
    icon : require("../assets/setting.png"),
},
{
    title : "LOGOUT",
    icon : require("../assets/logout.png"),
},

];
export const ListData = [
    {
        title:"Check Up Results.pdf"
    },
    {
        title:"Check Up Results.pdf"
    },
    {
        title:"Medical Prescription.pdf"
    },
    {
        title:"Dental X-Ray Result.pdf"
    }

];

export const AppointmentData = [
    {
        title:"Upcoming Appointments"
    },
    {
        title:"Past Appointments"
    },
    {
        title:"Medical Records"
    }
];

export const TreatmentData = [
    {
        date:"26 Nov ‘19",
        time:"09.00 - 10.00",
        title:"Treatment",
        treatmentName:"Open Access",
        doctorType:["Dentist","Nurse"],
        doctorName:["Drg. Adam H.","Jessicamila"],
        icon:require("../assets/fileimg.png"),
        note:"Note",

    },
    {
        date:"12 Nov ‘19",
        time:"09.00 - 10.00",
        title:"Treatment",
        treatmentName:"Root Canal",
        doctorType:["Dentist","Nurse"],
        doctorName:["Drg. Adam H.","Jessicamila"],
        icon:require("../assets/fileimg.png"),
        note:"Note",
    },
];

export const UserInfoData = [
        {Title:"Gender",value:"Female"},
        {Title:"Birthday",value:"Feb 24th,1997"},
        {Title:"Phone Number",value:"(239) 555 -0108"},
       {Title:"Registered Date",value:"Feb 24th, 1997"},
       {Title:"Street_Address",value:"JL. Diponegoro No. 21"},
       {Title:"City", value:"Cilacap"},
       {Title:"Zip Code",value:"655849"},
       {Title:"Member Status",value:"Active Member"}
    
  
];
