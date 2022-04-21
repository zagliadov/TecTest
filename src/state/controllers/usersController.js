export const getUsers = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => json);
};
