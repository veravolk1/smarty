import React, {useContext} from "react";
import DevicePage from "./DevicePage/DevicePage";
import Home from "./Home/Home";
import CurrentPageContextObject from "./CurrentPageContext";
import {DeviceCategory} from '../../types/device';


const Body: React.FC = () => {
    const {currentPage, currentDevices} = useContext(CurrentPageContextObject);
    const device = currentDevices?.find(device => device.deviceId === currentPage);
    return (
        <div>
            {currentPage === "home" ? <Home /> : <DevicePage device={device}/>}
        </div>
    );
};

export default Body;