import React from "react";
import LessonList from "./components/LessonsList";
import AddLesson from "./components/addLesson";


const App = () => {
  return (
    <div>
      <h1>Lessons</h1>
      <LessonList/>
      <AddLesson/>
    </div>
  );
};

export default App;
