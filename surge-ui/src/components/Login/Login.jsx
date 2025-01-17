import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
// import undraw_medical_research from "../../assets/undraw_medical_research_deep_blue.svg"
import "./Login.css"
import apiClient from "../services/apiClient"
import { useAuthContext } from "components/Contexts/auth"

export default function Login({redirect, setIsLoggedIn, isLoggedIn}) {
  const {setAppState, appState} = useAuthContext();
    const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    email: "",
    password: "",
  })



  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors((e) => ({ ...e, form: null }))

    const { data, error } = await apiClient.loginUser({ email: form.email, password: form.password })
    if (error)
    {
      setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
    }
    if (data?.user)
    {
      setAppState(data.user)
      apiClient.setToken(data.token)
      setIsLoggedIn(true)
      navigate("/nutrition");
    }
    setIsLoading(false);
  }

  return (

    <div className="Login">
      <div className="card">
        <h2>Login</h2>

        {Boolean(errors.form) && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="user@gmail.com"
              value={form.email}
              onChange={handleOnInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
            {isLoading ? "Loading..." : "Login"}
          </button>
        </div>

        <div className="footer">
          <p>
            Don't have an account? Sign up <Link className = "hereLink" to="/register">here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
