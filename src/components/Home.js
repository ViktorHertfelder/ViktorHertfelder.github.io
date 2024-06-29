import React from 'react';
import {Carousel} from 'react-bootstrap';
import WebDev from "./pexels-pixabay-270404.jpg";
import AppDev from "./pexels-pixabay-147413.jpg"

const Home = () => {
    return (
        <div id="home">
            <Carousel>
                <Carousel.Item>
                    <div style={{maxHeight: "100vh", overflow: "hidden"}}>
                        <img
                            className="d-block w-100"
                            src={WebDev}
                            alt="First slide"
                            style={{objectFit: "cover", maxHeight: "100%"}}
                        />
                    </div>
                    <Carousel.Caption className="text-light" style={{background: "rgb(0, 0, 0, 0.5)"}}>
                        <h5>Web development</h5>
                        <p>Websites and Webapps with React and Bootstrap</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{maxHeight: "100vh", overflow: "hidden"}}>
                        <img
                            className="d-block w-100"
                            src={AppDev}
                            alt="Second slide"
                        />
                        <Carousel.Caption className="text-light" style={{background: "rgb(0, 0, 0, 0.5)"}}>
                            <h5>Mobile App development</h5>
                            <p>Android Apps developed in Kotlin with Compose</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default Home;
