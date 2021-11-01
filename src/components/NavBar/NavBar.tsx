import './NavBar.css';
import React, { useContext} from "react";
import deviceConfig from "../../deviceConfig.json";
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import Device from '../../types/device';
import CurrentPageContextObject from "../Body/CurrentPageContext";


const NavBar: React.FC =  () => {
    const {setCurrentPage} = useContext(CurrentPageContextObject);
    const devices: Array<Device> = deviceConfig.devices;
    return (
        <div className="navBar">
            <Container>
                <Button id="home" onClick={() => setCurrentPage("home")}><img id="logo" src={process.env.PUBLIC_URL + "/images/smartyLogo.svg"}/></Button>
                <div id="devices">
                    <Button className="device" onClick={() => setCurrentPage(devices[2].deviceId)}>{devices[2].deviceName}</Button>
                    <Button className="device" onClick={() => setCurrentPage(devices[1].deviceId)}>{devices[1].deviceName}</Button>
                    <Button className="device" onClick={() => setCurrentPage(devices[0].deviceId)}>{devices[0].deviceName}</Button>
                </div>
            </Container>
        </div>

    );
};

export default NavBar;