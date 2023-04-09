(function getTablero(size) {
  console.time("Chessboard");
  let output = "";
  const tablero = Math.pow(size, 2);
  let module = 2;
  let white = "⬜";
  let black = "⬛";

  for (let i = 1; i < tablero + 1; i++) {
    console.log(`Evaluando ${i}`);
    if (i % module === 0) {
      console.log(`se pone # en ${i}`);
      output += black;
    } else {
      console.log(`se pone espacio en ${i}`);
      output += white;
    }
    if (i % size === 0) {
      console.log(`se brinca en ${i}`);
      output += "\n";
      white = white === "⬜" ? "⬛" : "⬜";
      black = black === "⬛" ? "⬜" : "⬛";
    }
  }
  console.timeEnd("Chessboard");
  console.log(`${output}`);
})(4);
