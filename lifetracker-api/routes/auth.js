const express = require("express")
const User = require("../models/user")
const router = express.Router()

router.post("/login", async (req, res, next)=> {
    try{
        const user = await User.login(req.body)
        return res.status(200).json({ user })
    } catch(err){
        next(err)
    }
})

router.post("/register", async(req, res, next) => {
    try{
        console.log(req.body)
        const user = await User.register(req.body)
        return res.status(201).json({ user })
    } catch(err){
        next(err)
    }
})

router.get("/activity", async(req, res, next) => {
    try{
        const user = req.body.user
        console.log(user)
        //if no user then error message make an account
        const activities = await User.fetchActivity(user)
        return res.status(200).json({ activities })
    } catch(err){
        next(err)
    }
})

module.exports = router