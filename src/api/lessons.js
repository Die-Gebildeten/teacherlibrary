import {
  createUnit,
} from "../graphql/mutations";
import { listUnits } from "../graphql/queries";
import {
  API,
  Storage,
} from "aws-amplify";

export async function getLessonsGraphQL() {
  const lessons = await API.graphql({
    query: listUnits,
  });
  console.log(
    lessons.data.listUnits.items.map(
      (lesson) => lesson.file
    )
  );
  return lessons.data.listUnits.items;
}

export async function postLessonGraphQL(
  unit
) {
  const file = unit.file[0];
  await Storage.put(file.name, file);
  unit.file = file.name;
  await API.graphql({
    query: createUnit,
    variables: { input: unit },
  });
}

export async function fetchLessons(updateState) {
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
  updateState(
    apiData.data.listUnits.items
  );
}
