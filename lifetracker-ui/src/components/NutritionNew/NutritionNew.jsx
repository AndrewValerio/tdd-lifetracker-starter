import * as React from "react"
import "./NutritionNew.css"
import { useNavigate, Link, Navigate } from "react-router-dom"
import NutritionForm from "../NutritionForm/NutritionForm"

export default function NutritionNew(props) {
    

  return (
    <div className="nutrition">
        <h2>Create Nutrition</h2>
        <NutritionForm appState={props.appState}/>
    </div>
  )
}
