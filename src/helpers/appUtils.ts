export function shuffleArray(array: any[]) {
  const arrayCopy = array.slice();
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  };

  return arrayCopy;
}

export function getColor() {
  const colorList = ["color1", "color2", "color3"];
  return shuffleArray(colorList)[0];
}
