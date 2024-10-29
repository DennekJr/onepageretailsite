export type ComponentDataBAseType = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export const getComponentData = (pageComponent) => {
  return fetch(`http://localhost:1337/api/${pageComponent}`).then((res) =>
    res.json(),
  );
};

export const getComponentImages = (pageComponent) => {
  return fetch(`http://localhost:1337/api/${pageComponent}`).then((res) =>
    res.json(),
  );
};
