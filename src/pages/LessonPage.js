import React from "react";
import { getLessons } from "../api/getLessons";
import Card from "../components/Card";
import useAsync from "../hooks/useAsync";
import styled from "@emotion/styled";

const CardSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, minmax(auto, 50px));
  @media (min-width: 900px) {
    grid-template-columns: repeat(10, minmax(auto, 50px));
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(15, minmax(auto, 50px));
  }
  grid-gap: 40px;
  align-items: center;
  justify-content: center;
  & * {
    grid-column: span 4;
  }
`;

function LessonPage(props) {
  const { data: lessons } = useAsync(getLessons);
  return (
    <CardSection>
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
    </CardSection>
  );
}

export default LessonPage;
