import {Accordion} from "react-bootstrap";
import Container from "react-bootstrap/Container";

function Skills() {
    return (
        <Container>
            <div id="skills" className="d-flex flex-column justify-content-center align-items-center">
                <div style={{paddingBottom: "10px"}}>
                    <h1 className="text-white">Software Development Skills:</h1>
                </div>
                <Accordion style={{width: "80%"}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Java</Accordion.Header>
                        <Accordion.Body>
                            Java was my first love.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Kotlin</Accordion.Header>
                        <Accordion.Body>
                            After learning Java, I found Kotlin. It's truly magnificent.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>React</Accordion.Header>
                        <Accordion.Body>
                            React is the go to choice when building webapps.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Bootstrap</Accordion.Header>
                        <Accordion.Body>
                            What would we do without Bootstrap? Building all elements from scratch.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Compose</Accordion.Header>
                        <Accordion.Body>
                            Compose is a powerful UI framework supported by Android. Thanks to Kotlin Multiplatform it
                            now is available on almost all platforms.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>


                <div style={{paddingBottom: "10px", paddingTop: "20px"}}>
                    <h1 className="text-white">Language Skills:</h1>
                </div>

                <Accordion style={{width: "80%"}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>English</Accordion.Header>
                        <Accordion.Body>
                            Fluent. Written and spoken.
                            <br/>
                            Officially: B2 Level
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>German</Accordion.Header>
                        <Accordion.Body>
                            Fluent. Written and spoken.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Russian</Accordion.Header>
                        <Accordion.Body>
                            Fluent. Written and spoken.
                            <br/>
                            Officially: B1 Level
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </Container>
    );
}

export default Skills;