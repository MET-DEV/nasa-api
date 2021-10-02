const Sequelize= require('sequelize')
const db=require("../config/database")
const Choice = require('./choices')

const Question=db.define('questions',{
    question_body:{
        type:Sequelize.STRING
    },

})
Question.hasMany(Choice,{as:"choice",foreignKey:"question_id"})

module.exports=Question