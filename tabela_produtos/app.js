var MongoClient = require('mongodb').MongoClient;

const servidor = 'mongodb://localhost:27017/TabeloProdutos';

MongoClient.connect(servidor, (err, db)=>{
    if(err)
    console.log("Falha na conexão:" +err);
    else
    console.log("Conexao com sucesso ")
    
    var colecao = db.collection("produtos")

    colecao.find({}).toArray(function (erro, documentos){
     //Vai somar os precos dos produtos utilizando o Reduce()
     const somarValor = function(total, itemCarrinho){
         return total + itemCarrinho.preco;
     }
     const valorPagar = documentos.reduce(somarValor, 0);
       //imprimir os produtos na Array
            documentos.forEach(function(doc){
             console.log("___________________________")
             console.log("Produto: " + doc.nome)
             console.log("Preco: " + doc.preco.toFixed(2) + " R$")
         }, this);

         console.log("_______________________________");
         console.log("Valor total a pagar : "+ valorPagar.toFixed(2) +" R$");
   
    });

    db.close();
})

