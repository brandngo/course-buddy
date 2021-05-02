import React, { Component } from "react";
import DroppableContainer from '../components/DroppableContainer/DroppableContainer.js';

const data = {
  container1: [
    { id: 1, name: "item 1" },
    { id: 2, name: "item 2" },
    { id: 3, name: "item 3" },
    { id: 4, name: "item 4" },
    { id: 5, name: "item 5" },
    { id: 6, name: "item 6" }
  ],
  container2: [
    { id: 101, name: "other 1" },
    { id: 102, name: "other 2" },
    { id: 103, name: "other 3" },
    { id: 104, name: "other 4" }
  ]
};

class Home extends Component {
  state = {
    ...data
  };

  onDragEnd = ({ destination, source }) => {
    if (destination && source) {
      this.setState(prevState => {
        const newData = cloneDeep(prevState);

        newData[destination.droppableId].splice(
          destination.index,
          0,
          ...newData[source.droppableId].splice(source.index, 1)
        );

        return {
          ...newData
        };
      });
    }
  };

  handleReset = () => {
    this.setState({ ...data });
  };

  render = () => (
    <div style={{ padding: 20 }}>
      <DraggableContainer data={this.state} handleChange={this.onDragEnd} />
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <button className="btn btn-primary" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Home;