// if-setninger skiller seg fra setningslogiske kondisjonaler, i og med at de ikke er analytiske. Dersom antesedenten er sann i kode, gjør maskinen konklusjonen virkelig: De er praktiske syllogismer.

let velkomstmelding = "Hei hei verden";

console.log(velkomstmelding);

const navn = ["Lars", "Jørgen", "Leah"];

let index = 0;

while (index < navn.length) {
  console.log(navn[index]);
  index += 1;
}

function navneliste() {
  const navn = ["Lars", "Jørgen", "Leah"];

  let index = 0;
  while (index < navn.length) {
    console.log(navn[index]);
    index += 1;
  }
}

const oddOrEven = (x) => {
  if (x % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

const addOrRemove = (array, string) => {
  if (array.includes(string)) {
    let index = array.indexOf(string);
    array.splice(index, 1);
    return array;
  } else if (!array.includes(string)) {
    array.push(string);
    return array;
  }
};

["1", "2", "3", "4"], "5";

["1", "2", "3", "4"], "3";

function coolMaker(parameter) {
  //your code here
  let type = typeof parameter;
  switch (type) {
    case "number":
      parameter = parameter * 2;
      return `😎${String(parameter)}😎`;
      break;
    case "string":
      return `😎${parameter}😎`;
      break;
    case "boolean":
      if (parameter === true) {
        return `😎Yeah😎`;
      } else {
        return `😎Chill😎`;
      }
      break;
  }
}

function marvelEditor(array) {
  //your code here
  array.splice(0, 1);
  array.splice(2, 1, "Skrull");
  array.splice(0, 2, "Captain America");
  return array.join("💪");
}
