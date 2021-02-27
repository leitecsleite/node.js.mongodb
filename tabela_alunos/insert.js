var MongoClient = require("mongodb").MongoClient

var servidor ="mongodb://localhost:27017/TabeloDeAlunos";

// Aqui vai acessar o servidos de banco de dados;

MongoClient.connect(servidor, function(err,db){
  if(err)
   console.log("Erro ao estabelecer conexão" + err);
  else
  console.log("Conexã estabelicida");

  var alunos = [
    {Nome:"Maria" , media_nota: 6, status: "APROVADO"},
    {Nome:"Jão" ,   media_nota: 8, status: "APROVADO"},
    {Nome:"Roberto", media_nota: 5, status: "REPROVADO"},
    {Nome:"ANA" , media_nota: 10, status: "APROVADO"},
    {Nome:"Gilberto" , media_nota: 9, status: "APROVADO"},
    {Nome:"Arthur" , media_nota: 2, status: "REPROVADO"},
    {Nome:"Julia" , media_nota: 8, status: "APROVADO"}, 
    
  ];
  
  var colecao =db.collection("Alunos"); // aqui vai ser o nome da tabela


  // colecao.insertMany vai inserir os dados na tabela
  colecao.insertMany(alunos, function(erro, resultado){ 
     if(erro)
     console.log("Erro ao inserir o documento: " + erro); 
     else
     console.log("Inserido com sucesso :D")
  })


  db.close();
})


