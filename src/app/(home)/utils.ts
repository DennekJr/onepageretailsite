export type ComponentDataBAseType = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
//setup hosted strapi backend
export const getComponentData = (pageComponent: string) => {
  return fetch(`https://newworld-solutions-strapi-git-main-chidumebi-ohiris-projects.vercel.app/api/${pageComponent}`).then((res) =>
    res.json(),
  );
};
