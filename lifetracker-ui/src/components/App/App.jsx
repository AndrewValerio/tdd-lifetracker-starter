import * as React from "react"
import "./App.css"
import Navbar from "../Navbar/Navbar"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useState } from "react";
import Landing from "../Landing/Landing"
import NotFound from "components/NotFound/NotFound";
import Register from "../Register/Register"
import Login from "../Login/Login"

export default function App() {
  const [appState, setAppState] = useState({})
  return (
    <div className="App">
      <React.Fragment>{ <BrowserRouter>
            <Navbar user={appState.user} />
            <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register setAppState={setAppState} />} />
            <Route path="/login" element={<Login setAppState={setAppState} />} />
            <Route path="*" element={<NotFound/>}
            />
        </Routes>
      </BrowserRouter>}</React.Fragment>
    </div>
  )
}
