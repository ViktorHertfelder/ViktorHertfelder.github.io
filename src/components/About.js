import Me from "./Bewerbungsfoto.jpg"

function About() {
    return (
        <div id="about" className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <img src={Me} className="img-fluid"/>
                </div>
                <div className="col-md-6 ">
                    <div className="text-center text-white d-flex flex-column justify-content-center h-100 mx-3">
                        <h1>Hi there! I'm Viktor</h1>
                        <h5>I'm a Kotlin and Java developer working on connected car solutions.</h5>
                        <p>I'm currently located in Dresden, Germany.</p>
                        <p>
                            My current employer is: <a href="https://valtech-mobility.com">Valtech Mobility GmbH</a>
                        </p>
                        <br/>
                        <div className="text-center mb-3">
                            <h5>You're interested in getting to know more about me and my work?</h5>
                        </div>

                        <div className="text-center">
                            <a href="mailto:hertfelder@vik.technology" className="btn btn-outline-primary">Contact
                                me.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;