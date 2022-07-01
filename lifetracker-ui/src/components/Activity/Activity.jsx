import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./Activity.css"


export default function Activity({ setAppState, isLoggedIn, setRedirect }){
    const navigate = useNavigate()
    useEffect(() => {
        if(isLoggedIn == false){
        navigate("/login")
        setRedirect(true)
    }
    },[])
    console.log("activity component", isLoggedIn)
    
    
    return (      
        <p>Activity page reached</p>
    )
}