export const filterObjectArray = (objectArray: any[], string: string) => {
  const objectArrayCopy = JSON.parse(JSON.stringify(objectArray));
  return objectArrayCopy.filter((object: any) => {
    return object.name.toLowerCase().indexOf(string) !== -1;
  });
};
