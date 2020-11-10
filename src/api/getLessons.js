export const getLessons = async () => {
  const response = await fetch("http://localhost:3000/lessons");
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  console.log(result);
  return result;
};

