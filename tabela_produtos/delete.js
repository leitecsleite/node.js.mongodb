var MongoClient = require('mongodb').MongoClient;

 var servidor = 'mongodb://localhost:27017/TabeloProdutos';

MongoClient.connect(servidor, function(erro, db) {
    if(erro)
    console.log("Falha na conexão " + erro)
    else
    console.log("Conexão com sucesso")

    var colecao = db.collection("produto");


    colecao.deleteOne({nome:"Feijao"}, function(erro, db) {
        if(erro)
        console.log("Desculpe não conseguimos excluir a sua ação: " + erro);
        else
        console.log("Deletado com sucesso: ")
    })

    db.close();
      
})