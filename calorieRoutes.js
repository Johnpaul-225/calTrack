const express = require("express")
const CalorieLog = require("../models/CalorieLog")
const router = express.Router()

router.post("/add", async (req, res) => {
  await CalorieLog.create(req.body)
  res.json({ message: "Calorie log added" })
})

router.get("/:userId", async (req, res) => {
  const data = await CalorieLog.find({ userId: req.params.userId })
  res.json(data)
})

module.exports = router
