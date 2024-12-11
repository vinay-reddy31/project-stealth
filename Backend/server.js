const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Welcome to NVIRI Backend");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
