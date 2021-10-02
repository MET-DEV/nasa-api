const express=require('express')
const app=express()
const Choice = require('../models/choices')
const router=express.Router()
const Question=require("../models/question")




router.get("/",(req,res)=>{
    Question.findAll({ include: ["choice"] }).then((questions)=>res.json(questions)).then((err)=>console.log(err))
})

router.post("/add",async(req,res)=>{
    
    const question=Question.create({question_body:req.body.question_body})
    await question.save
    res.send("Başarılı")
    
    
})



module.exports=router