import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function CourseList(props) {
  // courses is an array of course taken during props.year
  const [courses, populateCourses] = useState(props.courses);

  return (
    <div>
      <Container>
        <Droppable droppableId="">
          {(provided, snapshot) => (
            <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}>
                {this.state.items.map((item, index) => (
                    <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}>
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={getItemStyle(
                                    snapshot.isDragging,
                                    provided.draggableProps.style
                                )}>
                                {item.content}
                            </div>
                        )}
                    </Draggable>
                ))}
                {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Container>
    </div>

  );

}

export default CourseList;