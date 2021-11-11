import {Device} from "../../../../types/device";
import React from "react";
import {Col, Row} from "react-bootstrap";
import {MdRecordVoiceOver, MdSettingsInputComponent, MdBatteryStd} from "react-icons/md";
import {GiWeight} from "react-icons/gi";
import {IoMdResize, IoMdColorPalette} from "react-icons/io";
import {BsDisplayFill} from "react-icons/bs";



import "../DevicePage.css";

interface Props{
    device: Device;
}

const FeatureComponent: React.FC<Props> = ({device}) => {
    return (
        <>
        <Row className={"features"}>
            <Col className={"m-4"}>
                <div className={"feature"}>
                    <MdRecordVoiceOver size={60}/>
                    <h5 className={"m-0 p-4 "}>{device.sprachassistenz}</h5>
                </div>
            </Col>
            <Col className={"m-4"}>
                <div className={"feature"}>
                    <MdSettingsInputComponent size={60}/>
                    <h5 className={"m-0 p-4 "}>{device.schnittstellen}</h5>
                </div>
            </Col>
            <Col className={"m-4"}>
                <div className={"feature"}>
                    <GiWeight size={60}/>
                    <h5 className={"m-0 p-4 "}>{device.gewicht}</h5>
                </div>
            </Col>
        </Row>
        <Row className={"features"}>
            <Col className={"m-4"}>
                <div className={"feature"}>
                    <IoMdResize size={60}/>
                    <h5 className={"m-0 p-4 "}>{device.masse}</h5>
                </div>
            </Col>
            {typeof device.akku !== 'undefined' &&
            <Col className={"m-4"}>
                <div className={"feature"}>
                    <MdBatteryStd size={60}/>
                    <h5 className={"m-0 p-4 "}>{device.akku}</h5>
                </div>
            </Col>}
            {typeof device.display_size !== 'undefined' &&
            <Col className={"m-4"}>
                <div className={"feature"}>
                    <BsDisplayFill size={60}/>
                    <h5 className={"m-0 p-4 "}>{device.display_size}</h5>
                </div>
            </Col>}

            <Col className={"m-4"}>
                <div className={"feature"}>
                    <IoMdColorPalette size={60}/>
                    <h5 className={"m-0 p-4 "}>{device.farben}</h5>
                </div>
            </Col>
        </Row>
        </>
    );

};

export default FeatureComponent;
