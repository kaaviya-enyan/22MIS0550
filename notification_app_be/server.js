const express = require("express");
const cors = require("cors");

const Log = require("../logging-middleware/index");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {

  await Log(
    "backend",
    "info",
    "route",
    "Home API accessed"
  );

  res.status(200).json({
    success: true,
    message: "Backend working successfully"
  });
});

app.get("/students", async (req, res) => {

  await Log(
    "backend",
    "info",
    "controller",
    "Student details fetched"
  );

  const students = [
    {
      id: 1,
      name: "Rahul"
    },
    {
      id: 2,
      name: "Kavin"
    }
  ];

  res.status(200).json(students);
});

app.get("/error", async (req, res) => {

  await Log(
    "backend",
    "error",
    "handler",
    "Manual error route triggered"
  );

  res.status(500).json({
    success: false,
    message: "Internal server error"
  });
});

const PORT = 5000;

app.listen(PORT, async () => {

  console.log(`Server running on port ${PORT}`);

  await Log(
    "backend",
    "info",
    "service",
    "Backend server started"
  );
});