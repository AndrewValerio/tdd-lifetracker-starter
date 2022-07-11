import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./Nutrition.css"
import NutritionOverview from "components/NutritionOverview/NutritionOverview"
import { NutritionContextProvider, useNutritionContext } from "../contexts/nutrition";
import { useAuthContext } from "components/Contexts/auth"

export default function NutritionContainer(){
    return(
        <NutritionContextProvider>
            <Nutrition />
        </NutritionContextProvider>
    )
}


function Nutrition({ isLoggedIn, setRedirect}){
    const {appState, setAppState} = useAuthContext()
    const navigate = useNavigate()
    useEffect(() => {
        if(isLoggedIn == false){
        navigate("/login")
        setRedirect(true)
    }
    },[])
        return (
            <div className="nutrition-page">
                <NutritionOverview appState={appState}/>
                </div>
        )
}