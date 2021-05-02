import React from 'react'
import styled from 'styled-components'
import Draggables from './Draggables.js'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`
const Title = styled.h3`
  padding: 8px;
`
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? 'skyblue' : 'white'}
  flex-grow: 1;
  min-height: 100px;
`
function Droppables(props) {
  return(
    <Container>
      <Title>{props.column.title}</Title>
      <Droppable droppableId={props.column.id} type="TASK">
        {(provided, snapshot) => (
          <TaskList
            innerRef={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {this.props.tasks.map((task, index) => (
              <Droppables key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );

}

export default Droppables;