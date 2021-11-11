import './CarouselComponent.css';
import React from "react";
import {Carousel} from "react-bootstrap";
import { Device } from "../../../../types/device";

interface Props{
    device: Device | undefined;
}

const CarouselComponent: React.FC<Props> = ({device}) => {
    return (
        <Carousel variant={"dark"} interval={null} >
            {device?.images.map((image, index) => {
                return (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block image "
                            src={process.env.PUBLIC_URL + "/images/" + image}
                            alt="First slide"
                        />
                    </Carousel.Item>
                );
            })}
        </Carousel>);
};

export default CarouselComponent;