const Sequelize=require('sequelize')
const db=require('../config/database')
const Question = require('./question')

const Choice=db.define('choices',{
    choice_body:{
        type:Sequelize.STRING
    },
    question_id:{
        type:Sequelize.INTEGER
    },
    
    choice_status:{
        type:Sequelize.BOOLEAN
    },
})


module.exports=Choice