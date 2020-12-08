import React, {
  useEffect,
  useState,
} from "react";
import LessonCard from "../components/LessonCard";
import { subjects } from "../colorSettings";
import CardSection from "../components/CardSection";
import { fetchLessons} from "../api/lessons";
import AddLessonCard from "../components/AddLessonCard";
import {deleteUnit} from "../graphql/mutations";
import {API, Auth} from "aws-amplify";
import SubjectSelector from "../components/SubjectSelector";

function LessonPage(props) {
  const [
    lessons,
    setLessons,
  ] = useState([]);
  useEffect(() => {
    fetchLessons(setLessons);
  }, []);

  const [selectedSubject, setSelectedSubject] = useState("");
const filteredLessons = lessons.filter(lesson => lesson.subject.includes(selectedSubject));


  Auth.currentAuthenticatedUser().then(user=>console.log(user));
  function findLessonColor(subjectDB) {
    const foundSubject = subjects.find(
      (subject) =>
        subject.subject === subjectDB
    );
    return foundSubject.color;
  }

  async function handleDelete(id){
    try{
      if (window.confirm("Are you sure you want to delete your lesson?")){
      const newLessonsArray = lessons.filter(lesson=> lesson.id!== id);
      await API.graphql({query: deleteUnit, variables: {input: {id}}})
      setLessons(newLessonsArray);
      }
      else {
        return;
      }
    }
    catch(e){
      alert("Your request failed. You are only allowed to delete lessons that you submitted.");
      console.log(e);
    }
  }

  return (
    <>
      <SubjectSelector onChange= {e => setSelectedSubject(e.target.value)}/>
    <CardSection>
    <AddLessonCard link="/add"/>
      {filteredLessons?.map((lesson) => (
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
          handleDelete={() => handleDelete(lesson.id)}
        />
      ))}
    </CardSection>
    </>
  );
}

export default LessonPage;
