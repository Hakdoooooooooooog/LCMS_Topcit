export const setNewPath = (currentPath: string) => {
  const pathArray = currentPath.split("/");
  const newPath = pathArray.slice(0, pathArray.length - 1).join("/") || "/";
  return newPath;
};
