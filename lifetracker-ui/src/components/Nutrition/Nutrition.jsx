import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./Nutrition.css"


export default function Nutrition({ setAppState, isLoggedIn, setRedirect}){
    const navigate = useNavigate()
    useEffect(() => {
        if(isLoggedIn == false){
        navigate("/login")
        setRedirect(true)
    }
    },[])
    return (
        <p>Nutrition page reached</p>
        
    )
}