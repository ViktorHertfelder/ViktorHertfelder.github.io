// Contact.js

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 vw-100 bg-dark text-white text-center">
      <p>Feel free to connect with me on social media!</p>

      <Row className="mt-4 py-4">
        <Col xs={12} md={6} className="mb-3 text-center" style={{ width: '100%' }}>
          <a href="https://de.linkedin.com/in/viktor-hertfelder-308169294" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="5x" />
          </a>
        </Col>

        <Col xs={12} md={6} className="mb-3 text-center" style={{ width: '100%' }}>
          <a href="https://github.com/ViktorHertfelder" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="5x" />
          </a>
        </Col>

        <Col xs={12} md={4} className="mb-3 text-center" style={{ width: '100%' }}>
          <a href="mailto:hertfelder@vik.technology">
            <FontAwesomeIcon icon={faEnvelope} size="5x" />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
