import React, {
  useEffect,
  useState,
} from "react";
import LessonCard from "../components/LessonCard";
import { subjects } from "../globalSettings";
import CardSection from "../components/CardSection";
import {fetchLessons} from "../api/lessons";
import AddLessonCard from "../components/AddLessonCard";


function LessonPage(props) {
  const [
    lessons,
    setLessons,
  ] = useState([]);
  useEffect(() => {
    fetchLessons(setLessons);
  }, []);



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
        <LessonCard
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
      <AddLessonCard link="/add"/>
    </CardSection>
  );
}

export default LessonPage;
