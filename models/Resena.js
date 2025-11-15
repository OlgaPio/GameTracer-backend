const mongoose = require("mongoose");

const ResenaSchema = new mongoose.Schema({
  juegoId: { type: mongoose.Schema.Types.ObjectId, ref: "Juego" },
  texto: String,
  fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Resena", ResenaSchema);
