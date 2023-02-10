const Sequelize = require ('sequelize')
const Database = new Sequelize ('test', 'root', '0087', {
    host:'localhost',
    dialect: 'mysql'
})

Database.authenticate().then(function(){
    console.log("Conectado com sucesso ao MySQL")
}).catch(function(erro){
    console.log("Falha ao se conectar ao MySQL"+ erro) 
})

