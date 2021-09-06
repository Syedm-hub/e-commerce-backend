//requiring models

const express = require("express");
const routes = require("");

//connection setup
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

//setup the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
