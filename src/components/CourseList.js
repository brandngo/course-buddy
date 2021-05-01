import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

function CourseList(props) {
  // courses is an array of course taken during props.year
  const [courses, populateCourses] = useState(props.courses);

  return (
    <div>
      <Container>
        <Row>
          <Container style={{width: "30%"}}>
            <h3 style={{textAlign: "center"}}>{props.type}</h3>
            <ListGroup>
              {courses.map((course) => {
                return <ListGroup.Item action>{course}</ListGroup.Item>;
              })}
            </ListGroup>
          </Container>
        </Row>
      </Container>
    </div>

  );

}

export default CourseList;