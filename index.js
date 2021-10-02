const express=require('express')

const bodyParser=require("body-parser")

const app=express()
app.use(bodyParser())

app.use("/question",require('./routes/questionRouter'))
app.use("/choice",require("./routes/choiceRouter"))
app.use(express.json)

app.listen(3000,()=>{
    console.log("server listening")
})