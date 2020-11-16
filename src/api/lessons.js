export const getLessons = async () => {
  const response = await fetch("/lessons");
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  console.log(result);
  return result;
};

export async function postLesson(lesson) {
  const response = await fetch("/lessons", {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(lesson),
  });
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();
  return result;
}
