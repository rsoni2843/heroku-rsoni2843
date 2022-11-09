const cors = require("cors");
const express = require("express");
const app = express();
app.use(express());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World WORKING");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
