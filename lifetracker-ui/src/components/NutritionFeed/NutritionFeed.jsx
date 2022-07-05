import axios from "axios"
import "./NutritionFeed.css"
import NutritionCard from "../NutritionCard/NutritionCard"


export default function NutritionFeed({appState}){
    console.log(appState)
        return (
            <div className="feed">
                <NutritionCard appState={appState} />
                </div>
        )
}