const mongoose = require("mongoose")

const calorieSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  date: String,
  calories: Number
})

module.exports = mongoose.model("CalorieLog", calorieSchema)
