var MongoClient = require('mongodb').MongoClient

const servidor = 'mongodb://localhost:27017/TabeloProdutos';

MongoClient.connect(servidor, function(erro, db){
    if(erro)
    console.log("Falha na conexão: "+ erro)
    else
    console.log("Conexão com sucesso")


     var produtos = []
     
     var colecao = db.collection("produtos")

     colecao.insertMany(produtos, function(erro, resultado){
         if(erro)
          console.log("Falha ao inserir: " +erro);
         else
         console.log("Seus dados foram enseridos com sucesso")
     })

    db.close();
})