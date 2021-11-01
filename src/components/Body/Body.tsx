import React, {useContext} from "react";
import deviceConfig from "../../deviceConfig.json"
import DevicePage from "./DevicePage/DevicePage";
import Home from "./Home/Home";
import CurrentPageContextObject from "./CurrentPageContext";


const Body: React.FC = () => {
    const {currentPage} = useContext(CurrentPageContextObject);
    const device = deviceConfig.devices.find(device => device.deviceId === currentPage);
    return (
        <div>
            {currentPage === "home" ? <Home /> : <DevicePage device={device}/>}
        </div>
    );
};

export default Body;