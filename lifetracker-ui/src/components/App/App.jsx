import * as React from "react"
import "./App.css"
import Navbar from "../Navbar/Navbar"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useState } from "react";
import Landing from "../Landing/Landing"
import NotFound from "components/NotFound/NotFound";
import Register from "../Register/Register"
import Login from "../Login/Login"
import Activity from "../Activity/Activity"
import Nutrition from "../Nutrition/Nutrition";
import Sleep from "../Sleep/Sleep";
import Exercise from "../Exercise/Exercise";

export default function App() {
  const [appState, setAppState] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [redirect, setRedirect] = useState(false)
  return (
    <div className="App">
      <React.Fragment>{ <BrowserRouter>
            <Navbar user={appState.user} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register setAppState={setAppState} 
            isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} 
            />
            <Route path="/login" element={<Login setAppState={setAppState} 
              isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
              setRedirect={setRedirect} redirect={redirect}
            />} 
            />
            <Route path="/activity" element={<Activity setAppState={setAppState} 
              isLoggedIn={isLoggedIn} setRedirect={setRedirect}
            />} 
            />
            <Route path="/nutrition" element={<Nutrition setAppState={setAppState} 
              isLoggedIn={isLoggedIn} setRedirect={setRedirect}
            />} 
            />
            <Route path="/exercise" element={<Exercise setAppState={setAppState} 
              isLoggedIn={isLoggedIn} setRedirect={setRedirect}
            />} />
            <Route path="/sleep" element={<Sleep setAppState={setAppState} 
              isLoggedIn={isLoggedIn} setRedirect={setRedirect}
            />} />
            <Route path="*" element={<NotFound/>}
            />
        </Routes>
      </BrowserRouter>}</React.Fragment>
    </div>
  )
}
