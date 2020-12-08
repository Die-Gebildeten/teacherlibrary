import { subjects } from "../colorSettings";
import React from "react";

function SubjectSelector(props) {
  return (
    <select
      onChange={props.onChange}
    >
      <option value="">
        All subjects
      </option>
      {subjects.map((subject) => (
        <option
          key={subject.subject}
          value={subject.subject}
        >
          {subject.subject}
        </option>
      ))}
    </select>
  );
}

export default SubjectSelector;
