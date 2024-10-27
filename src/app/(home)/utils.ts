export const getComponentData = (pageComponent) => {
  return fetch(`http://localhost:1337/api/${pageComponent}`).then((res) =>
    res.json(),
  );
};
