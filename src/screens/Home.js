import React from 'react';

// custom components
import Year from '../components/Year.js'
import CourseList from '../components/CourseList.js';

function Home() {
  const courses1A = ["cs240", "cs136", "faifsojoij"];

  return (
    <div>
      <p>hello</p>
      <CourseList type={"Required"} courses={courses1A}></CourseList>
    </div>

  );
}

export default Home;