import { useState } from "react"
import axios from "axios"

export default function Dashboard() {
  const [calories, setCalories] = useState("")

  const addCalories = async () => {
    await axios.post("http://localhost:5000/api/calories/add", {
      calories,
      date: new Date().toISOString().slice(0,10)
    })
    setCalories("")
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daily Calorie Tracker</h1>
      <input
        className="border p-2 mr-2"
        value={calories}
        onChange={e => setCalories(e.target.value)}
        placeholder="Enter calories"
      />
      <button onClick={addCalories} className="bg-blue-500 text-white px-4 py-2">
        Add
      </button>
    </div>
  )
}
