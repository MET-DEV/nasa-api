const {Sequelize}=require('sequelize');

module.exports= new Sequelize('NasaSpaceApps','postgres','12345',{
    host:'localhost',
    dialect:'postgres'
})