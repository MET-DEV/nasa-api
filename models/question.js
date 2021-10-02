const Sequelize= require('sequelize')
const db=require("../config/database")

const Question=db.define('questions',{
    question_body:{
        type:Sequelize.STRING
    },

})