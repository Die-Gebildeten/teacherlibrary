import React, {
  useEffect,
  useState,
} from "react";
import Card from "../components/Card";
import styled from "@emotion/styled";
import { subjects } from "../globalSettings";
import {
  Storage,
  API,
} from "aws-amplify";
import { listUnits } from "../graphql/queries";

const CardSection = styled.section`
  display: grid;
  grid-template-columns: repeat(
    5,
    minmax(auto, 50px)
  );
  @media (min-width: 900px) {
    grid-template-columns: repeat(
      10,
      minmax(auto, 50px)
    );
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(
      15,
      minmax(auto, 50px)
    );
  }
  @media (min-width: 1600px) {
    grid-template-columns: repeat(
      20,
      minmax(auto, 50px)
    );
  }
  grid-gap: 40px;
  align-items: center;
  justify-content: center;
  & * {
    grid-column: span 4;
  }
`;

function LessonPage(props) {
  const [
    lessons,
    setLessons,
  ] = useState([]);
  useEffect(() => {
    fetchLessons();
  }, []);

  async function fetchLessons() {
    const apiData = await API.graphql({
      query: listUnits,
    });
    const lessonsFromAPI =
      apiData.data.listUnits.items;
    await Promise.all(
      lessonsFromAPI.map(
        async (lesson) => {
          if (lesson.file) {
            const link = await Storage.get(
              lesson.file
            );
            lesson.file = link;
          }
          return lesson;
        }
      )
    );
    setLessons(
      apiData.data.listUnits.items
    );
    console.log(
      apiData.data.listUnits.items

    );
  }

  function findLessonColor(subjectDB) {
    const foundSubject = subjects.find(
      (subject) =>
        subject.subject === subjectDB
    );
    return foundSubject.color;
  }

  return (
    <CardSection>
      {lessons?.map((lesson) => (
        <Card
          key={lesson.id}
          label={lesson.grade}
          title={lesson.title}
          color={findLessonColor(
            lesson.subject
          )}
          text={lesson.description}
          tag1={lesson.tag1}
          tag2={lesson.tag2}
          tag3={lesson.tag3}
          tag4={lesson.tag4}
          link={lesson.file}
        />
      ))}
    </CardSection>
  );
}

export default LessonPage;
