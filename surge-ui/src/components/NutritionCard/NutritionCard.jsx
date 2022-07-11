import axios from "axios"
import "./NutritionCard.css"


export default function NutritionCard({appState, nutrition = {}}){
 
        return (
            <div className="NutritionCard">
            <div className="card-header">
            <div>
                <img className="image" src={nutrition?.imageUrl} alt="" />
            </div>
            <img src="ywywywy" alt=""/>
            <h2 className="title">{nutrition?.name}</h2>
            </div>
            <div className="card-stats">
            <div className="CardStat">
            <p>Calories</p>
            <span>{nutrition?.calories}</span>
            </div>
            <div className="CardStat">
            <p>Quantity</p>
            <span>1</span>
            </div>
            </div>
            <div className="card-meta">
            <small>Created at {nutrition.createdAt}</small>
            <small className="category">{nutrition.category}</small>
            </div>
            </div>
                
        )
}