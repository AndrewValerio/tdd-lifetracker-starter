import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./Register.css"
import apiClient from "../services/apiClient"

export default function Signup({ setAppState, setIsLoggedIn }) {
    const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
    agreeToTerms: false,
  })

  const handleOnInputChange = (event) => {
    if (event.target.name === "password") {
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
    }
    if (event.target.name === "passwordConfirm") {
      if (form.password && form.password !== event.target.value) {
        setErrors((e) => ({ ...e, passwordConfirm: "Password's do not match" }))
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }))
      }
    }
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async () => {
    setIsLoading(true)
    setErrors((e) => ({ ...e, form: null }))

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }))
      setIsLoading(false)
      return
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }))
    }

    const { data, error } = await apiClient.signupUser({
      first_name: form.first_name,
       last_name: form.last_name,
       email: form.email,
       password: form.password,
      username: form.username
    })
    if (error)
    {
      setErrors((e) => ({ ...e, form: error }))
      setIsLoading(false);
    }
    if (data?.user)
    {
      setAppState(data.user);
      apiClient.setToken(data.token)
      setIsLoading(false);
      setIsLoggedIn(true)
      navigate("/activity");
    }
      else {
        setErrors((e) => ({ ...e, form: "Something went wrong with registration" }))
        setIsLoading(false)
      }
  }

  return (
    <div className="Register">
      <div className="card">
        <h2>Register an Account</h2>

        {errors.form && <span className="error">{errors.form}</span>}

          <div className="split-inputs">
          <div className="input-field">
              <label htmlFor="name">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleOnInputChange}
              />
              {errors.username && <span className="error">{errors.username}</span>}
            </div>
            <div className="input-field">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="Jane"
                value={form.first_name}
                onChange={handleOnInputChange}
              />
              {errors.first_name && <span className="error">{errors.first_name}</span>}
            </div>
            <div className="input-field">
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Doe"
                value={form.last_name}
                onChange={handleOnInputChange}
              />
              {errors.last_name && <span className="error">{errors.last_name}</span>}
            </div>
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="jane@doe.io"
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
              placeholder="password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="confirm password"
              value={form.passwordConfirm}
              onChange={handleOnInputChange}
            />
            {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
          </div>

          <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
            {isLoading ? "Loading..." : "Create Account"}
          </button>
        </div>

        <div className="footer">
          <p>
            Already have an account? Login <Link to="/login">here</Link>
          </p>
        </div>
      </div>
  )
}