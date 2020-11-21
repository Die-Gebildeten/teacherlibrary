import { API } from "aws-amplify";
import {
  createUnit,
  deleteUnit,
} from "../graphql/mutations";
import { listUnits } from "../graphql/queries";

export const getLessons = async () => {
  const response = await fetch(
    "/lessons"
  );
  if (!response.ok) {
    throw response;
  }
  const result = await response.json();
  return result;
};

export async function postLesson(
  lesson
) {
  const response = await fetch(
    "/lessons",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(lesson),
    }
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  console.log(result);
  return result;
}

export async function getLessonsGraphQL() {
  const lessons = await API.graphql({
    query: listUnits,
  });
  console.log(
    lessons.data.listUnits.items
  );
  return lessons.data.listUnits.items;
}

export async function postLessonGraphQL(
  unit
) {
  await API.graphql({
    query: createUnit,
    variables: { input: unit },
  });
}
