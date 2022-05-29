const randomizeArray = (array: any[]): any[] => {
  return array
    .map((data) => ({ data: data, random: Math.random() }))
    .sort((objectA, objectB) => objectA.random - objectB.random)
    .map((array) => array.data);
};

export { randomizeArray };
