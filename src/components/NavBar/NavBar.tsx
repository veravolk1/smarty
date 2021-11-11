import './NavBar.css';
import React, { useContext, useState, useEffect} from "react";
import deviceConfig from "../../deviceConfigs/deviceConfig.json";
import speakerConfig from "../../deviceConfigs/speakerConfig.json";
import watchConfig from "../../deviceConfigs/watchConfig.json";
import homeConfig from "../../deviceConfigs/homeConfig.json";
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import { Device, DeviceCategory } from '../../types/device';
import CurrentPageContextObject from "../Body/CurrentPageContext";


const NavBar: React.FC =  () => {
    const {currentPage, setCurrentPage, currentDevices, setCurrentDevices} = useContext(CurrentPageContextObject);

    const [deviceCategory, setDeviceCategory] = useState<DeviceCategory | null>();

   useEffect(() => {
   if(deviceCategory === null){
        setCurrentPage("home");
   }else{
       switch(deviceCategory){
           case DeviceCategory.SPEAKER:
                setCurrentDevices(speakerConfig.devices);
                setCurrentPage(speakerConfig.devices[0].deviceId);
                break;
           case DeviceCategory.HOME:
                setCurrentDevices(homeConfig.devices);
                setCurrentPage(homeConfig.devices[0].deviceId);
                break;
           case DeviceCategory.WATCH:
                setCurrentDevices(watchConfig.devices);
                setCurrentPage(watchConfig.devices[0].deviceId);
                break;
           default: 
                setCurrentDevices(deviceConfig.devices);
       }
   }}, [deviceCategory]);

    return (
    <>
        <div className="navBar">
            <Container>
                <Button id="home" onClick={() => setDeviceCategory(null)}><img id="logo" src={process.env.PUBLIC_URL + "/images/smartyLogo.svg"}/></Button>
                <div id="devices">
                    <Button className="deviceCategory" onClick={() => setDeviceCategory(DeviceCategory.HOME)}>{DeviceCategory.HOME}</Button>
                    <Button className="deviceCategory" onClick={() => setDeviceCategory(DeviceCategory.WATCH)}>{DeviceCategory.WATCH}</Button>
                    <Button className="deviceCategory" onClick={() => setDeviceCategory(DeviceCategory.SPEAKER)}>{DeviceCategory.SPEAKER}</Button>

                </div>
            </Container>
        </div>
       
        <div id="subnav">
              <Container>
                <div id="devices">
                 {currentPage !== "home" && currentDevices.map((device, index) => {
                     return <Button key={index} className="device" onClick={() => setCurrentPage(device.deviceId)}>{device.deviceName}</Button>;
                 })}
                </div>
            </Container>
        </div>
           </> 

    );
};

export default NavBar;