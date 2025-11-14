// Configuración general del servidor
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/juegos", require("./routes/juegos.routes"));
app.use("/resenas", require("./routes/resenas.routes"));

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));

app.listen(process.env.PORT || 3000);
