const mongoose = require("mongoose");

const JuegoSchema = new mongoose.Schema({
  titulo: String,
  portada: String,
  genero: String,
  horas: Number,
  completado: Boolean,
  rating: Number, 
});

module.exports = mongoose.model("Juego", JuegoSchema);

