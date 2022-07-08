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
import NutritionNew from "../NutritionNew/NutritionNew";
import { AuthContextProvider, useAuthContext } from "components/Contexts/auth";
import ProtectedRoute from "components/protectedRoutes/protectedRoutes";

export default function appContainer(){
  return(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
  )
}

function App() {
  const {appState, setAppState} = useAuthContext;
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [redirect, setRedirect] = useState(false)
  return (
    <div className="App">
      <React.Fragment>{ <BrowserRouter>
            <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} appState={appState} />
            <Routes>
            <Route path="/" element={<Landing />} />
            <Route
                path="/register"
                element={
                  <ProtectedRoute
                    element={<Register setAppState={setAppState} appState={appState} user={appState?.user}/> }/>
                }
              ></Route>
            <Route
                path="/login"
                element={
                  <ProtectedRoute
                    element={<Login setAppState={setAppState} appState={appState} user={appState?.user} isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                    /> }/>
                }
              ></Route>
            <Route
                path="/activity"
                element={
                  <ProtectedRoute
                    element={<Activity setAppState={setAppState} appState={appState} user={appState?.user}
                    isLoggedIn={isLoggedIn}
                      setIsLoggedIn={setIsLoggedIn}
                    /> }/>
                }
              ></Route>
            <Route
                path="/nutrition"
                element={
                  <ProtectedRoute
                    element={<Nutrition setAppState={setAppState} appState={appState} user={appState?.user}/> }/>
                }
              ></Route>
            <Route path="/exercise" element={<Exercise setAppState={setAppState} 
              isLoggedIn={isLoggedIn} setRedirect={setRedirect}
              appState={appState}
            />} />
            <Route path="/sleep" element={<Sleep setAppState={setAppState} 
              isLoggedIn={isLoggedIn} setRedirect={setRedirect}
              appState={appState}
            />} />
            <Route
                path="/nutrition/create"
                element={
                  <ProtectedRoute
                    element={<NutritionNew setAppState={setAppState} appState={appState} user={appState?.user}/> }/>
                }
              ></Route>

            <Route path="*" element={<NotFound/>}
            />
        </Routes>
      </BrowserRouter>}</React.Fragment>
    </div>
  )
}
