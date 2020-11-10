import React from "react";
import { getLessons } from "../api/getLessons";
import Card from "../components/Card";
import useAsync from "../hooks/useAsync";

function LessonPage(props) {
  const { data: lessons } = useAsync(getLessons);
  return (
    <div>
      {lessons?.map((lesson) => (
        <Card
          id={lesson.id}
          label={lesson.label}
          title={lesson.title}
          color="green"
          text={lesson.description}
          tag1={lesson.tag1}
          tag2={lesson.tag2}
          tag3={lesson.tag3}
          tag4={lesson.tag4}
        />
      ))}
    </div>
  );
}

export default LessonPage;
