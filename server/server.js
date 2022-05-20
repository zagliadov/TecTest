require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const { permissionsCheck, auth, apiurl } = require("./helpers/helpers.js");

const PORT = process.env.PORT || 9001;
const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/test", require("./routes/test"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
