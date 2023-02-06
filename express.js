const express = require("express"); //chama o express 
const app = express(); //chama a constante express

//rota: define um camimho para cada requisicao que o usuario pedir 
    app.get("/main", function( req, res) { // get para mandar mensagem,  uma função callback e o método de resposta RES
    res.send("Bem vindo"); // send: enviar algo para o app, ou qualquwe coisa para o cliente
});
    app.get("/home", function( req, res) {
    res.send("ola"); //req: responsavél por receber dados de uma requisição
    })
//só é possivel usar o send uma vez dentro de uma função
//parametro
//Quando um parametro é inserido, é obrigatório inseri tambem no navegador
//pode ter mais de um parâmetro
    app.get("/contato/:nome/:cor/:tema", function( req, res) { //O parametro vem depois dos dois pontos
    res.send(" <h1> Sou " + req.params.nome+"</h1>" + ", minha cor preferida é " +req.params.cor); //req: esta enviando os parametro para o servido app.listen(3452), através de uma requisicao http.              
});
//http://localhost:3452/contato/kell/azul/tema
//ao inseri no navegador /kell no lugar do email aparecerá "olá kell"

//Enviando e exibindo arquivo para quem acessa a rota "/filmes"
app.get("/",function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})
app.get("/sobre",function(req, res){
    res.sendFile(__dirname + "/html/sobre.html")
})
//__dirname : retorna diretório padrão da aplicação

app.listen(3452, function(){           //deve  ser o ultimo códico do projeto
    console.log("Servidor rodando")   //funcão de callback: pode exibi  qualquer outra coisa dentro dela
});  
