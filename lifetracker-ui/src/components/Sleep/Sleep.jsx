import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"


export default function Sleep({ setAppState, isLoggedIn, setRedirect}){
    const navigate = useNavigate()
    useEffect(() => {
        if(isLoggedIn == false){
        navigate("/login")
        setRedirect(true)
    }
    },[])
    return (
        <p>Sleep page reached</p>
    )
}