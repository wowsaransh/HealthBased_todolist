const express = require("express");
const users = require("./routes/users");
const recipes = require("./routes/recipes");
const exercises = require("./routes/exercises");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Started at ${port}`);
});

app.use("/users", users);
app.use("/recipes", recipes);
app.use("/exercises", exercises);
