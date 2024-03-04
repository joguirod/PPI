const readlineSync = require('readline-sync')
var axios = require("axios");

const url = readlineSync.question("Insira uma URL: ")

axios.get(url).then(function(response){
    console.log("Status: ", response.status)     
    console.log("Encoding: ", response.headers['content-encoding'])  
    console.log("Tamanho da resposta: ", response.headers['content-length'])
    readlineSync.question("Pressione <Enter> para ver o corpo da resposta...")  
    console.log(response.data)  
}).catch(function (error){
    console.log(error)
})
