export type ComponentDataBAseType = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export const getComponentData = (pageComponent: string) => {
  return fetch(
    `https://better-wonder-b3024bd900.strapiapp.com/api/${pageComponent}`,
    {
      method: "GET",
    },
  ).then((res) => {
    return res.json();
  });
};
