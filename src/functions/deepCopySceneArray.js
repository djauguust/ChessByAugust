export const deepCopySceneArray = (scene) => {
  if (!Array.isArray(scene) || scene.length !== 8) {
    return scene;
  }

  const newArray = [];

  for (let i = 0; i < scene.length; i++) {
    const innerArray = scene[i];

    if (!Array.isArray(innerArray) || innerArray.length !== 8) {
      newArray.push(innerArray);
      continue;
    }

    const newInnerArray = [];

    for (let j = 0; j < innerArray.length; j++) {
      const innerInnerArray = innerArray[j];

      if (!Array.isArray(innerInnerArray) || innerInnerArray.length !== 2) {
        newInnerArray.push(innerInnerArray);
        continue;
      }

      newInnerArray.push([...innerInnerArray]);
    }

    newArray.push(newInnerArray);
  }

  return newArray;
};
