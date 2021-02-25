var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/TabeloDeAlunos';

MongoClient.connect(servidor, function(erro, db) {
  if(erro)
    console.log("Erro ao estabelecer conexão:" + erro);
  else
    console.log("Conexão estabelecida com sucesso.");
   
    var colecao = db.collection("Alunos");
    // colecao.find vai pecorrer a array na tabela e procurar o status:

    colecao.find({status:"APROVADO"}).toArray(function (erro, documentos){
        documentos.forEach( function(doc){
            console.log("___________________________");
            console.log("Nome: " + doc.Nome);
            console.log("Nota: " + doc.media_nota);
            console.log("Status: " + doc.status);
        }, this); 
    });
  

  db.close();
});
