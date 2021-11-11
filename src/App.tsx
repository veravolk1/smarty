import './App.css';
import React, {useState} from "react";
import NavBar from "./components/NavBar/NavBar";
import Body from './components/Body/Body';
import CurrentPageContextObject from "./components/Body/CurrentPageContext";
import deviceConfig from "./deviceConfigs/deviceConfig.json";
import {Device} from "./types/device";

const App: React.FC = () =>{

    const [currentPage, setCurrentPage] = useState("home");
    const [currentDevices, setCurrentDevices] = useState(deviceConfig.devices as Array<Device>);

  return (
    <div className="App">
        <CurrentPageContextObject.Provider value={{currentPage, setCurrentPage, currentDevices, setCurrentDevices}}>
      <NavBar  />
      <Body  />
        </CurrentPageContextObject.Provider>
    </div>
  );
};

export default App;
