import React from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import { FaDatabase } from "react-icons/fa";
import NoData from "../NoData/NoData.js";
import DraggableItem from '../DraggableItem/DraggableItem.js';

const DroppableContainer = ({ droppableId, title, data }) => (
  <Container>
    <Droppable droppableId={droppableId}>
      {provided => (
        <Border ref={provided.innerRef} {...provided.droppableProps}>
          <Title>{title}</Title>
          {data && data.length > 0 ? (
            data.map((item, key) => (
              <DraggableItem key={item.id} item={item} index={key} />
            ))
          ) : (
            <NoData>
              <FaDatabase />
              <br />
              No Items
            </NoData>
          )}
          {provided.placeholder}
        </Border>
      )}
    </Droppable>
  </Container>
);

DroppableContainer.propTypes = {
  droppableId: PropTypes.string.isRequired,
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string
    })
  ).isRequired
};

export default DroppableContainer;
