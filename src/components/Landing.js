// src/components/LandingPage.js
import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import me from '../images/Bewerbungsfoto.jpg';

const landingPageStyle = {
  minHeight: '100vh',
  backgroundColor: '#343a40',  // Dunkle Hintergrundfarbe
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const contentStyle = {
  textAlign: 'center',
};

const imageStyle = {
    width: '30vw',
    height: 'auto',
    padding: '1rem'
};

const LandingPage = () => {
  return (
    <div style={landingPageStyle}>
      <div style={contentStyle}>
        <Image src={me} alt='Thats me. A few years ago.' style={imageStyle} fluid/>
        <h1>Hi, I'm Viktor.</h1>
        <p>
          Welcome to my website.
        </p>
        <p>
            I'm a Java and Kotlin developer. Currently located in Dresden, Germany.
        </p>
        <p>
            My current employer is <a href='https://www.valtech-mobility.com' target="_blank">Valtech Mobility GmbH</a>.
        </p>
        <Button variant="primary" href="/contact">Contact me</Button>
      </div>
    </div>
  );
};

export default LandingPage;
