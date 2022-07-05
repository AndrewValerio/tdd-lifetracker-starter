import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./Nutrition.css"
import NutritionFeed from "components/NutritionFeed/NutritionFeed"


export default function Nutrition({ setAppState, isLoggedIn, setRedirect, appState}){
    console.log(appState)
    const navigate = useNavigate()
    useEffect(() => {
        if(isLoggedIn == false){
        navigate("/login")
        setRedirect(true)
    }
    },[])
        return (
            <div className="nutrition-page">
                <div className="content">
                    <div className="heading">
                        <h1>Nutrition</h1>
                    </div>
                    <div className="overview">
                        <div className="main">
                            <h1>Overview</h1>
                            <button><Link className="nLink" to="/nutrition/create">Record Nutrition</Link></button>
                        </div>
                        <div><NutritionFeed appState={appState} /> </div>
                    </div>
                </div>
                </div>
        )
}