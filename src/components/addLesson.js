import { useMutation } from "@apollo/client";
import { ADD_LESSON, GET_LESSONS } from "../queries/queries";
import { useState } from "react";
import TeacherList from "./teachersList";

export default function AddLesson() {
  const [input, setInput] = useState({
    name: "",
    group: "",
    teacherId: "",
  });

  const [addLesson, { data, loading, error }] = useMutation(ADD_LESSON, {
    refetchQueries: [GET_LESSONS, "getLessonsQuery"],
  });

  const changeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await addLesson({
      variables: 
        input
    });
    // const form = e.target;
    // const formData = new FormData(form);
    // const name = formData.get("name");
    // const group = formData.get("group");
    // const teacherId = formData.get("teacherId");
    // await addLesson({ variables: { name, group, teacherId } });
  };

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={input.name} onChange={(e) => changeHandler(e)} />
        </div>
        <div>
          <label>Group: </label>
          <input type="text" name="group" value={input.group} onChange={(e) => changeHandler(e)} />
        </div>
        <div>
          <label>Teacher:</label>
          <select name="teacherId" value={input.teacherId} onChange={(e) => changeHandler(e)}>
            <option>select ...</option>
            <TeacherList />
          </select>
        </div>
        <button type="submit">Insert</button>
      </form>
    </div>
  );
}
