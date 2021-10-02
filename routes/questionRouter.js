const express=require('express')
const router=express.Router()
const Question=require("../models/question")
const Choice=require("../models/choices")


router.get("/",(req,res)=>{
    Question.findAll({ include: ["choice"] }).then((questions)=>res.json(questions)).then((err)=>console.log(err))
})
module.exports=router