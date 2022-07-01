const express = require("express")
const Nutrition = require("../models/nutrition")
const router = express.Router()



router.get("/", async(req, res, next) => {
    try{
        //console.log(res.locals)
        //const {user} = res.locals
        //console.log(user)
        const nutrition = await Nutrition.listNutritionForUser(1)
        return res.status(201).json({ nutrition })
    } catch(err){
        next(err)
    }
})

router.post("/create", async(req, res, next) => {
    try{
        //const user = res.locals.user
        const newNutrition = await Nutrition.createNutrition(req.body)
        return res.status(201).json({ newNutrition })
    } catch(err){
        next(err)
    }
})

router.get("/id/:nutritionId", async(req, res, next) => {
    try{
        const nutritionId = Number(req.params.nutritionId);
        const nutrition = await Nutrition.fetchNutritionById(nutritionId)
        return res.status(201).json({ nutrition })
    } catch(err){
        next(err)
    }
})

module.exports = router