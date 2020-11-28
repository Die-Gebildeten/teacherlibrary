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
