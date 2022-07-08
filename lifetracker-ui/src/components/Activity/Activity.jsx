import ActivityFeed from "components/ActivityFeed/ActivityFeed";
import { useState } from "react";
import "./Activity.css";
import { NutritionContextProvider } from "components/contexts/nutrition";

export default function activityContainer(){
    return(
    <NutritionContextProvider>
        <Activity />
    </NutritionContextProvider>
    )
}
function Activity() {
    return (
        <div className="activity-page">
            <div className="content">
                <ActivityFeed />
            </div>
        </div>
    )
}

