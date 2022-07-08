import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./NutritionForm.css"
import apiClient from "../services/apiClient"
import { useAuthContext } from "components/Contexts/auth"

export default function NutritionForm({}) {
    const {appState} = useAuthContext()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: 1,
    calories: "",
    imageUrl: "",
  })

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async () => {
    setIsLoading(true)
    setErrors((e) => ({ ...e, form: null }))

    const { data, error } = await apiClient.createNutrition({
      name: form.name,
      category: form.category,
       calories: form.calories,
       image_url: form.imageUrl,
       user_id: appState.id,
  })
  if (error)
  {
      setErrors(error)
  }
  if (data)
  {
    navigate("/nutrition");
    setForm("")
  }
  setIsLoading(false);
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