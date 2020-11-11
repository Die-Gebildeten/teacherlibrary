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
     
    </>
  );
}

export default App;
