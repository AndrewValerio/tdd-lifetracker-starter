const express = require("express")
const User = require("../models/user")
const router = express.Router()
const security = require("../middleware/security")
const { createUserJwt } = require("../utils/tokens")
const Nutrition = require("../models/nutrition")

router.post("/login", async (req, res, next)=> {
    try{
        const user = await User.login(req.body)

        const token = createUserJwt(user)
        return res.status(200).json({ user, token })
    } catch(err){
        next(err)
    }
})

router.post("/register", async(req, res, next) => {
    try{
        console.log(req.body)
        const user = await User.register({ ...req.body })
        const token = createUserJwt(user)
        return res.status(201).json({ user, token })
    } catch(err){
        next(err)
    }
})

router.get("/activity", async(req, res, next) => {
    try{
        const user = req.body.user
        console.log("this is user", user)
        //if no user then error message make an account
        const activities = await User.fetchActivity(user)
        return res.status(200).json({ activities })
    } catch(err){
        next(err)
    }
})

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
      const { email } = res.locals.user;
      const user = await User.fetchUserByEmail(email);
  
      const nutrition = await Nutrition.listNutritionForUser(user);
      const publicUser = await User.makePublicUser(user);
  
  
      return res.status(200).json({ user: publicUser, nutrition: nutrition });
    } catch (err) {
      next(err);
    }
  });
  
module.exports = router