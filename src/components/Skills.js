// Skills.js

import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const skillsData = [
  { id: 1, title: 'Java', message: 'It all started with Java.' },
  { id: 2, title: 'Kotlin', message: 'After learning Java, I thought why not give Kotlin a Chance? Now it is my favorite.' },
  { id: 3, title: 'React', message: 'This website uses React. You can find the code on my GitHub.' },
  { id: 4, title: 'JavaScript', message: 'Any good site uses JS, right?' },
  { id: 5, title: 'Bootstrap', message: 'Bootstrap makes your life easier.' },
];

const Skills = () => {
  const [openCardId, setOpenCardId] = useState(null);

  const handleCardClick = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-dark">
      {skillsData.map((skill) => (
        <Card
          key={skill.id}
          style={{ width: '100%', maxWidth: '25rem' }}
          className={`mb-3 ${openCardId === skill.id ? 'border-primary' : ''}`}
          onClick={() => handleCardClick(skill.id)}
        >
          <ListGroup variant="flush">
            <ListGroup.Item>{skill.title}</ListGroup.Item>
          </ListGroup>
          {openCardId === skill.id && (
            <Card.Body>
              <Card.Text>{skill.message}</Card.Text>
            </Card.Body>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Skills;
