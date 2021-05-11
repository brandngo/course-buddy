import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import courseData from './courseData.js';
import styled from 'styled-components';

const grid = 8;

const Styles = styled.div`

`;

const ScrollContainer = styled.div`
  box-sizing: border-box;
  background: lightgrey;
  padding: ${grid * 2}px;
  overflow-y: scroll;
  width: 100%;
  height: 80vh;
  position: relative;
`;

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  console.log(droppableDestination.droppableId);
  result[droppableDestination.droppableId] = destClone;

  return result;
};


const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});

const data = [courseData.courses.req, courseData.courses.rec, courseData.courses.elec, courseData.courses.comm,];
const headerId = {
  0: "Required",
  1: "Recommended",
  2: "Electives",
  3: "Communication",
  4: "1a",
  5: "1b",
  6: "2a",
  7: "2b",
  8: "3a",
  9: "3b",
  10: "4a",
  11: "4b",
  12: "5a",
  13: "5b",
};

const sanitize = (arr) => {
  return arr ? arr : [];
}

const courses = ["1a", "1b", "2a", "2b", "3a", "3b"];

function getData(data) {
  const compile = {
    "1a": sanitize(data["4"]),
    "1b": sanitize(data["5"]),
    "2a": sanitize(data["6"]),
    "2b": sanitize(data["7"]),
    "3a": sanitize(data["8"]),
    "3b": sanitize(data["9"]),
    "4a": sanitize(data["10"]),
    "4b": sanitize(data["11"]),
    "5a": sanitize(data["12"]),
    "5b": sanitize(data["13"]),
  }
  console.log(compile);
  return compile;

}

function dataLoop(yi) {
  const r = [];
  for (let i = 0; i < courses.length; i++) {
    if (yi[courses[i]]) {
      r.push(yi[courses[i]]);

    }
  }
  return r;
}

function DragAndDrop() {
  const [state, setState] = useState(data);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter(group => group.length));
    }
  }

  function exportData() {
    var ref = firebase.database().ref("tables");
    ref.child(firebase.auth().currentUser.uid).set({
      data: getData(state)
    });
  }

  useEffect(() => {
    var uid = firebase.auth().currentUser.uid;
    console.log(uid);
    firebase.
      database().
      ref(`tables/${firebase.auth().currentUser.uid}`)
      .on("value", (snap) => {
        if (snap.exists()) {
          var receivedData = snap.val().data;
          console.log(receivedData);
          var courseArr = Object.values(receivedData);

          setState([...state, ...dataLoop(receivedData)]);
          console.log(state);
        }
      }
      )
    console.log(state);
  }, [])

  return (
    <Styles>
      <div>
        <button
          type="button"
          onClick={() => {
            setState([...state, []]);
          }}
        >
          Add year
        </button>
        <button
          type="button"
          onClick={() => {
            getData(state);
          }}
        >
          retrieve
        </button>
        <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
        <button onClick={() => exportData()}>Save</button>
        <ScrollContainer>
          <div style={{ display: "flex", height: "60%" }}>
            <DragDropContext onDragEnd={onDragEnd}>
              {state.map((el, ind) => (
                <Droppable key={ind} droppableId={`${ind}`}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      style={getListStyle(snapshot.isDraggingOver)}
                      {...provided.droppableProps}
                    >
                      <h3>{headerId[ind.toString()]}</h3>
                      {el.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(

                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-around"
                                }}
                              >
                                {item.content}
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}

            </DragDropContext>
          </div>
        </ScrollContainer>
      </div>

    </Styles>
  );
}

/*
<Droppable droppableId="droppable-1">
  {(provided, snapshot) => (
    <div
      ref={provided.innerRef}
      style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
      {...provided.droppableProps}
    >
      I am a droppable!
      {provided.placeholder}
    </div>
  )}
</Droppable>
*/

export default DragAndDrop;
