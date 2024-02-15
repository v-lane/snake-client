const { KEY_MAPPINGS } = require("./constants");

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }

  if (KEY_MAPPINGS[data]) {
    connection.write(KEY_MAPPINGS[data]);
  }

  // if (data === 'w') {
  //   connection.write("Move: up");
  // }
  // if (data === 'a') {
  //   connection.write("Move: left");
  // }
  // if (data === 's') {
  //   connection.write("Move: down");
  // }
  // if (data === 'd') {
  //   connection.write("Move: right");
  // }
  // if (data === 'i') {
  //   connection.write("Say: Hi!");
  // }
  // if (data === 'j') {
  //   connection.write("Say: Nice!");
  // }
  // if (data === 'k') {
  //   connection.write("Say: Nomnom!");
  // }
  // if (data === 'l') {
  //   connection.write("Say: I am Snek!");
  // }


};



module.exports = {
  setupInput,
  handleUserInput
};