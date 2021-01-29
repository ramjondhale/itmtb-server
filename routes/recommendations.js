import express from "express";
import Recommendation from "../models/recommendation.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recommendations = await Recommendation.findOne();
    res.status(200).json(recommendations);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const recommendation = await Recommendation.findById(req.params.id);
    res.status(200).json(recommendations);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const recommend = req.body;

  const recommendation = new Recommendation(recommend);
  try {
    const r1 = await recommendation.save();
    res.status(200).json(r1);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const recommendation = await Recommendation.findById(req.params.id);
    const r1 = await recommendation.remove();
    res.status(200).json(r1);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default router;
