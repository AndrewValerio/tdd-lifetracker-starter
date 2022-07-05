import axios from "axios"
import "./NutritionCard.css"


export default function NutritionCard({appState}){
 
        return (
            <div class="NutritionCard">
            <div class="card-header">
            <img src="ywywywy" alt="nutrition"/>
            <h2 class="title">Apple</h2>
            </div>
            <div class="card-stats">
            <div class="CardStat">
            <p>Calories</p>
            <span>174</span>
            </div>
            <div class="CardStat">
            <p>Quantity</p>
            <span>1</span>
            </div>
            </div>
            <div class="card-meta">
            <small>Today at 10:47 AM</small>
            <small class="category">Fruit</small>
            </div>
            </div>
                
        )
}