var MongoClient  = require('mongodb').MongoClient

var servidor = "mongodb://localhost:27017/TabeloDeAlunos"

MongoClient.connect(servidor, function(err, db){
    if(err)
    console.log("Falha na conexão " + err)
    else
    console.log("Conexão com sucess")


    db.close();
})