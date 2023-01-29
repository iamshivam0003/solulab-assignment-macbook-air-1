import React from 'react';
import './App.css';
import SideNavBar from './components/SideNavBar';
import MiddleGridDiv from "./components/MiddleGridDiv";
import LastGridDiv from "./components/LastGridDiv";
function App() {
  return (
    <div className="App">
        <SideNavBar/>
        <MiddleGridDiv/>
        <LastGridDiv/>  
    </div>
  );
}

export default App;
