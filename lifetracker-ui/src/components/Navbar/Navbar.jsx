import * as React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./Navbar.css"
import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="header">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav-links-div">
          <Link to="/" className="nav-links"> Activity </Link>
          <Link to="/" className="nav-links"> Exercise </Link>
          <Link to="/" className="nav-links"> Nutrition </Link>
          <Link to="/" className="nav-links"> Sleep </Link>
          <Link to="/login">
              <button className="btn login">Login</button>
            </Link>
          <Link to="/register">
              <button className="btn register">Register</button>
            </Link>
        </div>
      </div>
    </nav>
  )
}