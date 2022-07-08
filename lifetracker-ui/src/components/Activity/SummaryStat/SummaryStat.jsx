import { useAuthContext } from "components/Contexts/auth"
import { useNutritionContext } from "components/contexts/nutrition";
import { useState, useEffect, React } from "react";
import "./SummaryStat.css"
export default function SummaryStat()
{
    const [avgCal, setAvgCal] = useState(0);
  const data = useNutritionContext();
  const notdata = useAuthContext()
  console.log(notdata, "not data")
  // let dataArr = data.nutritions
  
   console.log("this is authcontext in activity", data.nutritions)
  // console.log("this is the appstate", props.appState)
 

  function calcAvg(arr){
    let avg = 0;
    for(let i =0; i<arr.length; i++) {
      avg += parseInt(arr[i].calories)
    }
    return avg/arr.length
  }

  useEffect(() => {
    setAvgCal(Math.round(calcAvg(data.nutritions)))
  },[data])

    return (
        <div className="summary-stat">
            <div className="main">
                <div className="cards-content">
                    <div className="cards yellow">
                        <p>Total Exercise Minutes</p>
                        <h1>0</h1>
                    </div>
                    <div className="cards purple">
                          <p>Avg Sleep Hours</p>
                        <h1>0</h1>
                    </div>
                    <div className="cards lightblue">
                          <p>Avg Daily Calories</p>
                        <h1>{avgCal}</h1>
                     </div>
                </div>
            </div>
            <div className="more">
                <h2>More</h2>
                <div className="moreCardContent">
                    <div className="cards blue">
                        <p>Maximum Hourly Calories</p>
                        <h4>0</h4>
                    </div>
                    <div className="cards gold">
                        <p>Maximum Hourly Calories</p>
                         <h4>0</h4>
                    </div>
                    <div className="cards red">
                        <p>Maximum Hourly Calories</p>
                         <h4>0</h4>
                     </div>
                </div>
            </div>
        </div>
    )
}

  function calcAvg(arr){
    let avg = 0;
    for(let i =0; i<arr.length; i++) {
      avg += parseInt(arr[i].calories)
    }
    return avg/arr.length
  }


