const express=require('express')
const app=express()


app.use("/question",require('./routes/questionRouter'))

app.listen(3000,()=>{
    console.log("server listening")
})