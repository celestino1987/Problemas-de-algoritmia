const arrExit = new Array();
const data = [
  [0, " "],
  [2, "A", "B", "C"],
  [3, "D", "E", "F"],
  [4, "G", "H", "I"],
  [5, "J", "K", "L"],
  [6, "M", "N", "O"],
  [7, "P", "Q", "R", "S"],
  [8, "T", "U", "V"],
  [9, "W", "X", "Y", "Z"],
];

const handleText = (text) => {
  const arrText = [...text.toUpperCase()];
  //Cojo las letras del texto una por una
  arrText.forEach((lyrics) => {
    //cojo los array del data
    data.forEach((num) => {
      //miro si la letra que le paso esta incluoida dentro de cada array que saque en el paso anterior
      if (num.includes(lyrics)) {
        //si existe que me de el numero de ese array donde contenga esa letra
        num[0];

        //cojo el indice de la letra
        num.indexOf(lyrics);
        //repito el nupero segun el indice
        const numRepeat = num[0].toString().repeat(num.indexOf(lyrics));
        arrExit.push(numRepeat);
      }
    });
  });

  const newString = arrExit.reduce((a, b) => a + b);

  console.log("Texto de entrada ==>", text);
  console.log("Salida ===>", newString.replace(/0/g, " "));
};
handleText("texto de prueba");
