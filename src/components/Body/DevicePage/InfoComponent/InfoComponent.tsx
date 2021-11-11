import React from "react";
import {Device} from "../../../../types/device";
import "../DevicePage.css"



interface Props{
    device: Device;
}
const InfoComponent: React.FC<Props> = ({device}) => {

return (
    <div className={"infoComponent"} >
        <h1 className="deviceName" id="deviceName">{device.deviceName}</h1>
        <h2 className={"mt-5 pb-5 border-bottom"}>{device.price}</h2>
        <p>{device.description}</p>
    </div>
);
};

export default InfoComponent;