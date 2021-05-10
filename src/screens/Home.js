import React from 'react'
import ReactDOM from 'react-dom'
//import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import Box from '@material-ui/core/Box';
import "./Home.css"
import { Table } from "react-bootstrap"

//import initialData from './initial-data'
//import Droppables from '../components/DnDComponents/Droppables.js'

const Container = styled.div`
  display:flex;
`

class Home extends React.Component {
render() {
  return (
    <div>
    <h1>Term-Planner:</h1>
    <div className="container" width="100vw">
      <Box border={1} width="18%" height="40vh" alignItems="center" borderRadius={16} marginRight= "2%">
      <h1>1a</h1>
      </Box>
      <br></br>
      <Box border={1} width="18%" height="40vh" alignItems="center" borderRadius={16} marginRight= "2%">
      <h1>1b</h1>
      </Box>
      <Box border={1} width="18%" height="40vh" alignItems="center" borderRadius={16} marginRight= "2%">
      <h1>2a</h1>
      </Box>
      <Box border={1} width="18%" height="40vh" alignItems="center" borderRadius={16} marginRight= "2%">
      <h1>2b</h1>
      </Box>
      <Box border={1} width="18%" height="40vh" alignItems="center" borderRadius={16} marginRight= "2%">
      <h1>3a</h1>
      </Box>
      <Box border={1} width="18%" height="40vh" alignItems="center" borderRadius={16} marginRight= "2%">
      <h1>3b</h1>
      </Box>
      <Box border={1} width="18%" height="40vh" alignItems="center" borderRadius={16} marginRight= "2%">
      <h1>4a</h1>
      </Box>
      <Box border={1} width="18%" height="40vh" alignItems="center" borderRadius={16} marginRight= "2%">
      <h1>4b</h1>
      </Box>
      </div>
      <h1 //style={{position: 'relative', textAlign: 'center'}}
      >Course Categories:</h1>
      <div className="container2">
      <Box border={1} width="25%" height="100vh" alignItems="center" borderRadius={16} marginRight= "2%"> 
      <h1>Required Courses</h1>
      </Box>
      <Box border={1} width="50%" height="100vh" alignItems="center" borderRadius={16} marginRight= "2%">
      <h1>Recommended Courses</h1>
      </Box>
      <Box border={1} width="12.5%" height="100vh" alignItems="center" borderRadius={16} marginRight= "2%">
      <h1>Electives</h1>
      </Box>
      <Box border={1} width="12.5%" height="100vh" alignItems="center" borderRadius={16} marginRight= "2%">
      <h1>Comms</h1>
      </Box>
      </div>
      <h2>General Requirements</h2>
      <p>1. All required Math/CS courses must be taken</p>
      <p>2. 3 courses from the first list of recommended courses</p>
      <p>3. 2 courses from the second list of recommended courses</p>
      <p>4. 2 Humanities courses, 2 Social Science courses,
          1 Pure science course, 1 Pure/Applied Science course,
          3 courses of any type (one at 3XX level)</p>
      <h2>Special Requirements (per course)</h2>
      <p>1. The following courses require CS 240,241 :- 
        CS 348, CS 349, CS 350, CS 360, CS 365, CS 370, CS 371, CS 383, CS 442, CS 449.</p>
      <p>2. The following courses require CS 350 :- 
        CS 343, CS 444, CS 445, CS 446, CS 447, CS 448, CS 371, CS 383, CS 450, CS 451, CS 452, 
        CS 454, CS 456, CS 457, CS 458.</p>
      <p>3. The following courses require CS 341 :- CS 451, CS 466, CS 482, CS 485, CS 486, CS 488</p>
      <p>4. The following courses require CS 370/371 :- CS 475, CS 476, CS 479, CS 484</p>
      <p>5. The following courses require CS 360/365 :- CS 462</p>
      <h2>Suggested Course Sequence</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>1A</th>
            <th>1B</th>
            <th>2A</th>
            <th>2B</th>
            <th>3A</th>
            <th>3B</th>
            <th>4A</th>
            <th>4B</th>
            </tr>
            </thead>
          <tbody>
            <tr>
            <th>1</th>
            <th>CS 135/145</th>
            <th>CS 136/146</th>
            <th>CS 246</th>
            <th>CS 240</th>
            <th>CS 341</th>
            <th>CS 3XX/4XX</th>
            <th>Courses</th>
            <th>Courses</th>
            </tr>
            <tr>
            <th>2</th>
            <th>MATH 135</th>
            <th>MATH 136</th>
            <th>CS 245</th>
            <th>CS 241</th>
            <th>CS 350</th>
            <th>CS 3XX/4XX</th>
            <th>To</th>
            <th>To</th>
            </tr>
            <tr>
            <th>3</th>
            <th>MATH 137</th>
            <th>MATH 138</th>
            <th>STAT 230</th>
            <th>CS 251</th>
            <th>STAT 231</th>
            <th>Non-MATH</th>
            <th>Complete</th>
            <th>Complete</th>
            </tr>
            <tr>
            <th>4</th>
            <th>List 1 Communication</th>
            <th>List 2 Communication</th>
            <th>Non-MATH</th>
            <th>MATH 239</th>
            <th>Non-MATH</th>
            <th>Non-MATH</th>
            <th>Degree</th>
            <th>Degree</th>
            </tr>
            <tr>
            <th>5</th>
            <th>Non-MATH</th>
            <th>Non-MATH</th>
            <th>Non-MATH</th>
            <th>Non-MATH</th>
            <th>Elective</th>
            <th>Elective</th>
            <th>Requirements</th>
            <th>Requirements</th>
            </tr>
            </tbody>
          </Table>
        <h2>Links to resources we used</h2>
        <p>1. <a href="https://ucalendar.uwaterloo.ca/2122/COURSE/course-CS.html">The Undergrad Calendar, Cs Courses</a></p>
        <p>2. <a href="https://ugradcalendar.uwaterloo.ca/page/MATH-Computer-Science-Plan-Requirements">The Undergrad Calendar, Cs Degree Requirements</a></p>
        <p>3. <a href="https://cs.uwaterloo.ca/current/programs/suggested/2018-2019/bcs">Uwaterloo Cs Suggested Course Sequence</a></p>
    </div>
  )
}
}

export default Home;
