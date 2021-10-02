const express=require('express')
const Choice = require('../models/choices')
const app=express()
const router=express.Router()

router.post("/add",async(req,res)=>{
    const choice=Choice.create({choice_body:req.body.choice_body,question_id:req.body.question_id,choice_status:req.body.choice_status})
    await choice.save
    res.send('Başarılı')
})
module.exports=router
