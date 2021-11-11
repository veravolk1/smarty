import React from "react";
import {Device} from "../../../types/device";
import {Row, Col} from "react-bootstrap";
import CarouselComponent from "./CarouselComponent/CarouselComponent";
import './DevicePage.css';
import InfoComponent from "./InfoComponent/InfoComponent";
import FeatureComponent from "./FeatureComponent/FeatureComponent";


interface Props{
    device: Device | undefined;
}

const DevicePage: React.FC<Props> = ({device}) => {

    if(typeof device === "undefined"){
        return <p id="choose">Choose a Device</p>;
    }
  return(
     <>
          <Row className={"m-5"}>
              <Col sm={12} md={4}  className={"border-right carouselCell "}>
                  <div>
                      <CarouselComponent device={device}/>
                  </div>
              </Col>
              <Col sm={11} md={7} >
                  <InfoComponent device={device}/>
              </Col>
              <Col md={1}/>
          </Row>
          <Row>
              <FeatureComponent device={device} />
          </Row>
</>
  );
};

export default DevicePage;