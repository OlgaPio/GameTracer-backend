const express = require("express");
const router = express.Router();
const Resena = require("../models/Resena");

router.get("/:juegoId", async (req, res) => {
  const resenas = await Resena.find({ juegoId: req.params.juegoId });
  res.json(resenas);
});

router.post("/", async (req, res) => {
  const resena = await Resena.create(req.body);
  res.json(resena);
});

router.put("/:id", async (req, res) => {
  const resena = await Resena.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(resena);
});

router.delete("/:id", async (req, res) => {
  await Resena.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Reseña eliminada" });
});

module.exports = router;
