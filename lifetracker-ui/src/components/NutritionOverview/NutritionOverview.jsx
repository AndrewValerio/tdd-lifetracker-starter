import axios from "axios"
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import "./NutritionOverview.css"
import NutritionFeed from "components/NutritionFeed/NutritionFeed"
import { useNutritionContext } from "components/contexts/nutrition";

export default function NutritionOverview({}){
    const { nutritions } = useNutritionContext()
    console.log(nutritions)
        return (
            <div className="content">
                    <div className="heading">
                        <h1>Nutrition</h1>
                    </div>
                    <div className="overview">
                        <div className="main">
                            <h1>Overview</h1>
                            <button><Link className="nLink" to="/nutrition/create">Record Nutrition</Link></button>
                        </div>
                        <div><NutritionFeed nutritions={nutritions} /> </div>
                    </div>
                </div> 
        )
}