const express = require("express");
const router = express.Router();
const Juego = require("../models/Juego");

router.get("/", async (req, res) => {
  const juegos = await Juego.find();
  res.json(juegos);
});

router.post("/", async (req, res) => {
  const juego = await Juego.create(req.body);
  res.json(juego);
});

router.put("/:id", async (req, res) => {
  const juego = await Juego.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(juego);
});

router.delete("/:id", async (req, res) => {
  await Juego.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Juego eliminado" });
});

module.exports = router;
