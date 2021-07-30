import * as React from "react";
import Montseni from "./assets/img/montaña.jpg";
import huerto from "./assets/img/huert.jpg"
import bici from "./assets/img/bicicleta1.jpg"
import {Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


    export const BootstrapCarousel = () =>
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Montseni}
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={huerto}
                    alt="Second slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bici}
                    alt="Third slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
