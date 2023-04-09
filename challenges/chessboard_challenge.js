(function getTablero(size) {
  console.time("Chessboard");
  let output = "";
  const tablero = Math.pow(size, 2);
  let module = 2;
  let white = "⬜";
  let black = "⬛";

  for (let i = 1; i < tablero + 1; i++) {
    if (i % module === 0) {
      output += black;
    } else {
      output += white;
    }
    if (i % size === 0) {
      output += "\n";
      white = white === "⬜" ? "⬛" : "⬜";
      black = black === "⬛" ? "⬜" : "⬛";
    }
  }
  console.timeEnd("Chessboard");
  console.log(`${output}`);
})(8);
