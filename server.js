require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/juegos", require("./routes/juegosRoutes"));
app.use("/resenas", require("./routes/resenasRoutes"));

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));

app.listen(process.env.PORT || 3000);
