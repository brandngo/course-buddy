import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Year(props) {
  const [year, setYear] = useState(props.year);
  // courses is an array of course taken during props.year
  const [courses, populateCourses] = useState(props.courses);

  return (
    <div>
      <Container>
        <Row>
          <h1>{year}</h1>
        </Row>
        <Row>
          <Container>
            <Col>
              {courses.map((course) => {
                return <Row>{course}</Row>;
              })}
            </Col>
          </Container>
        </Row>
      </Container>
    </div>

  );

}

export default Year;