import React from "react";
import PropTypes from "prop-types";
import { DragDropContext } from "react-beautiful-dnd";
import Container from "../Container";
import DroppableContainer from "../DroppableContainer";
import Column from "../Column";
import Row from "../Row";

const DraggableContainer = ({ data, handleChange }) => (
  <DragDropContext onDragEnd={handleChange}>
    <Container>
      <Row style={{ margin: "0 auto" }}>
        {Object.keys(data).map((container, key) => (
          <Column width={`${100 / Object.keys(data).length}%`} key={key}>
            <DroppableContainer
              droppableId={container}
              title={container}
              data={data[container]}
            />
          </Column>
        ))}
      </Row>
    </Container>
  </DragDropContext>
);

DraggableContainer.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string
      })
    )
  ).isRequired
};

export default DraggableContainer;
