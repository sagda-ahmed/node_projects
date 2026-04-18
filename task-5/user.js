const express = require('express')
const User = require('../models/user')
const router = new express.Router()
router.post('/users', async (req, res) => {
    try{
        const user =new User(req.body)
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})
//get
router.get('/users', async (req, res) => {
User.find({}).then((users) =>{
        res.status(200).send(users)
    }).catch((e) =>{
        res.status(500).send(e)
    })})
    router.get("/users/:id" ,(req,res)=>{
    const _id = req.params.id
    User.findById(_id).then((user) =>{
        if (!user) {
            return res.status(404).send("unable to find user")
        }
        res.send(user)
    }).catch((e) =>{
        res.status(500).send(e)
    })
})
//patch
router.patch("/users/:id" , async (req,res) =>{
try{
    const _id = req.params.id
    const user = await User.findByIdAndUpdate(_id , req.body,{
        new : true,
        runValidators :true
    }
    )
    if (!user) {
        return res.status(404).send("unable to find userrrrrrrrrrrrrrr")
    }
    res.status(200).send(user)
}
catch(error){
    console.log(error)
    res.status(400).send(error)
}
})
//delete
router.delete("/users/:id" , async (req,res)=>{
    try{
        const _id = req.params.id
        const user = await User.findByIdAndDelete(_id)
        if (!user){
            return res.status(404).send("unable to find user")
        }
        res.status(200).send(user)
    }
    catch(error){
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = router