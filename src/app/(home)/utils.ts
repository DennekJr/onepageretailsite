export type ComponentDataBAseType = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
//setup hosted strapi backend
export const getComponentData = (pageComponent: string) => {
  return fetch(
    `https://holy-nature-8ee017e73c.strapiapp.com/api/${pageComponent}`,
    {
      method: "GET",
    },
  ).then((res) => {
    return res.json();
  });
};
