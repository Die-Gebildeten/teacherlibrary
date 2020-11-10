import Card from "../src/components/Card";
import { getLessons } from "./api/getLessons";
import LessonPage from "./pages/LessonPage";

function App() {
async function fetchLessons(){
  const lessons = await getLessons();
  console.log(lessons);
}

fetchLessons();

  return (
    <>
    <LessonPage />
      <Card
        color="darkgreen"
        title="Maths & Equations"
        label="Q1-2"
        text="We are going to learn the basics of equations. The French Revolutionary
      and Napoleonic Wars shaped the course of European and world history. After
      the collapse of the empire and a relative decline, France endured a tumultuous
      succession of governments culminating in the establishment of the French
      Third Republic in 1870 in the midst of the Franco-Prussian War. France
      was one of the prominent participants of World War I."
        tag1="Multiplication"
        tag2="Working with excel"
        tag3="Calculator"
        tag4="Graphs"
      />
    </>
  );
}

export default App;
