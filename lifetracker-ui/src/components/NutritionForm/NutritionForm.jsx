import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./NutritionForm.css"

export default function NutritionForm({ appState }) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: "",
    calories: "",
    imageUrl: "",
  })

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async () => {
    setIsLoading(true)
    setErrors((e) => ({ ...e, form: null }))

    try {
      const res = await axios.post("http://localhost:3001/nutrition/create", {
        user_id: appState.user.id,
        name: form.name,
        category: form.category,
        calories: form.calories,
        image_url: form.imageUrl,
      })

      navigate("/nutrition")

    } catch (err) {
      console.log(err)
      const message = errors
      setErrors((e) => ({ ...e, form: message}))
      setIsLoading(false)
    }
  }

  return (
    <div className="NutritionNew">
        <h2>Record Nutrition</h2>
      <div className="form">

        {errors.form && <span className="error">{errors.form}</span>}

          <div className="split-inputs">
          <div className="input-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleOnInputChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="input-field">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Vegetable"
                value={form.category}
                onChange={handleOnInputChange}
              />
              {errors.category && <span className="error">{errors.category}</span>}
            </div>
            <div className="input-field">
              <label htmlFor="name">Calories</label>
              <input
                type="text"
                name="calories"
                placeholder="100"
                value={form.calories}
                onChange={handleOnInputChange}
              />
              {errors.calories && <span className="error">{errors.calories}</span>}
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              placeholder="Something"
              value={form.imageUrl}
              onChange={handleOnInputChange}
            />
            {errors.imageUrl && <span className="error">{errors.imageUrl}</span>}
          </div>

          <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
            {isLoading ? "Loading..." : "Save"}
          </button>
        </div>
      </div>
  )
}