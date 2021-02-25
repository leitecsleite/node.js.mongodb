var MongoClient = require("mongodb").MongoClient

var servidor = "mongodb://localhost:27017/TabeloDeAlunos"

MongoClient.connect( servidor, function(err, db){
    if(err)
        console.log("Erro ao Estabelecer a Conexão: " + err); 
    else
        console.log("Conexão Estabelecida com sucesso :D") ;
    

    var colecao = db.collection("Alunos");

    var filtro = { status: "PROVADA"};

    colecao.deleteMany(filtro, function(erro, resultado){
        if(erro)
         console.log("Não foi possivel deletar: " + erro)
        else
        console.log("Foi Deletado com sucesso :D");
    })

   

  db.close();
})