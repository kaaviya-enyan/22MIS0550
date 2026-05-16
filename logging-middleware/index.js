const axios = require("axios");

require("dotenv").config({
  path: __dirname + "/.env"
});

async function Log(stack, level, packageName, message) {

  console.log("Logger function called");

  try {

    console.log("TOKEN:", process.env.TOKEN);

    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack: stack,
        level: level,
        package: packageName,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Log created:", response.data);

  } catch (error) {

    console.log("Full Error:");

    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

module.exports = Log;