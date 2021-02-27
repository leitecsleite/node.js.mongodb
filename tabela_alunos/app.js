var MongoClient = require('mongodb').MongoClient;

var servidor = 'mongodb://localhost:27017/TabeloDeAlunos';

MongoClient.connect(servidor, function(erro, db) {
  if(erro)
    console.log("Erro ao estabelecer conexão:" + erro);
  else
    console.log("Conexão estabelecida com sucesso.");
   
    var colecao = db.collection("Alunos");
    // Vai pecorrer a Array e buscar os alunos que  tiveram a nota maior que 6;
    colecao.find({}).toArray(function (erro, documentos){
       // vai contruir um nova array com alunos aprovados e vai filtrar.
          const aprovados = documentos.filter((alunos) => alunos.media_nota > 6); 
           aprovados.forEach(function(doc){
            console.log("___________________________");
            console.log("Nome: " + doc.Nome);
            console.log("Nota: " + doc.media_nota);
            console.log("Status: " + doc.status);
        }, this); 
    });
  

  db.close();
});

/* documentos.forEach(function(doc){
            console.log("___________________________");
            console.log("Nome: " + doc.Nome);
            console.log("Nota: " + doc.media_nota);
            console.log("Status: " + doc.status);
        }, this);  */
