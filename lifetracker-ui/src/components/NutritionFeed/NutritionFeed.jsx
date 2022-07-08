import axios from "axios"
import "./NutritionFeed.css"
import NutritionCard from "../NutritionCard/NutritionCard"


export default function NutritionFeed({nutritions = []}){
    console.log(nutritions)
        return (
            <div className="feed">
            <div className="grid">
            {nutritions?.map((nutrition) => (
            <NutritionCard
              key={nutrition.id}
              nutrition={nutrition}
            />
          ))}
          {!nutritions?.length ? (
            <div className="card">
              <p>No products available</p>
            </div>
          ) : null}
        </div>
        </div>
        )
}