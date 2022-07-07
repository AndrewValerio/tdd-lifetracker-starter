const express = require("express")
const Nutrition = require("../models/nutrition")
const router = express.Router()
const security = require("../middleware/security")
const User = require("../models/user")



router.get("/", security.requireAuthenticatedUser, async(req, res, next) => {
    try{
        console.log("this is nutrition user", res.locals.user)
        const {email} = res.locals.user;

        const user = await User.fetchUserByEmail(email)
        console.log(user)

        const nutrition = await Nutrition.listNutritionForUser(user)
        return res.status(201).json({ nutrition })
    } catch(err){
        next(err)
    }
})

router.post("/create", security.requireAuthenticatedUser, async(req, res, next) => {
    try{
        const {user} = res.locals
        const newNutrition = await Nutrition.createNutrition({user, nutrition: req.body})
        return res.status(201).json({ newNutrition })
    } catch(err){
        next(err)
    }
})

router.get("/id/:nutritionId", security.requireAuthenticatedUser, async(req, res, next) => {
    try{
        const nutritionId = Number(req.params.nutritionId);
        const nutrition = await Nutrition.fetchNutritionById(nutritionId)
        return res.status(201).json({ nutrition })
    } catch(err){
        next(err)
    }
})

module.exports = router