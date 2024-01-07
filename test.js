const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");


async function run() {
  const res = await axios.get("http://localhost:3000");
  await fs.writeFile(path.resolve(__dirname, "test.html"), res.data);
}

run();
