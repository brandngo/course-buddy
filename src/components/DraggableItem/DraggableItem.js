import React from 'react';
import { Draggable } from "react-beautiful-dnd";
import PropTypes from "prop-types";
import DraggableProp from './DragItemStyles';

const styles = {
  columnStyles: {
    flex: " 0 0 100%",
    maxWidth: "100%",
    position: "relative",
    padding: "0 15px"
  },
  rowStyles: {
    display: "flex",
    flexWrap: "wrap"
  }
};

const DraggableItem = ({ item, index }) => (
  <Draggable
    key={item.id}
    draggableId={JSON.stringify({
      nodeId: item.id,
      type: "DragItem"
    })}
    index={index}
  >
    {provided => (
      <div
        style={styles.rowStyles}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <div style={styles.columnStyles}>
          <DraggableProp>{item.name}</DraggableProp>
        </div>
      </div>
    )}
  </Draggable>
);

DraggableItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string
  })
};

export default DraggableItem;
