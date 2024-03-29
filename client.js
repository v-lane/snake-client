const net = require("net");
const { IP, PORT } = require("./constants");



const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected!");
    conn.write("Name: VIC");

    // testing setTimeout to move
    // let x = 0;
    // let timeout = 50;
    // while (x < 30) {
    //   setTimeout(() => {
    //     conn.write("Move: up");
    //   }, timeout);
    //   timeout += 50;
    //   setTimeout(() => {
    //     conn.write("Move: right");
    //   }, timeout);
    //   timeout += 50;
    //   setTimeout(() => {
    //     conn.write("Move: right");
    //   }, timeout);
    //   timeout += 50;
    //   setTimeout(() => {
    //     conn.write("Move: up");
    //   }, timeout);
    //   timeout += 50;
    //   setTimeout(() => {
    //     conn.write("Move: left");
    //   }, timeout);
    //   timeout += 50;
    //   setTimeout(() => {
    //     conn.write("Move: left");
    //   }, timeout);
    //   timeout += 50;
    //   x++;
    // }

    // testing setInterval to move
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);




  });

  conn.on("data", ((data) => {
    console.log(`Incoming Message: ${data}`);
  }));



  return conn;
};

module.exports = { connect };