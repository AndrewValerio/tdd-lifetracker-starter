const express = require("express")
const Nutrition = require("../models/nutrition")
const router = express.Router()



router.get("/", async(req, res, next) => {
    try{
        console.log(res.locals.user)
        const user = res.locals.user
        console.log(user)
        const nutrition = await Nutrition.fetchNutritionForUser(user)
        return res.status(200).json({"nutritions": nutrition })
    } catch(err){
        next(err)
    }
})

router.post("/", async(req, res, next) => {
    try{
        const user = res.locals.user
        const newNutrition = await Nutrition.createNutrition({ nutrition: req.body.nutrition, user })
        return res.status(200).json({"nutritions": newNutrition })
    } catch(err){
        next(err)
    }
})

router.get("/:nutritionId", async(req, res, next) => {
    try{
        const nutritionId = req.params.nutritionId
        const nutrition = await Nutrition.fetchNutritionById(nutritionId)
        return res.status(200).json({"nutritions": nutrition })
    } catch(err){
        next(err)
    }
})

module.exports = router