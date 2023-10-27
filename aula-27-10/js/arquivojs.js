let http = require('http')
let fs = require('fs')
let server = http.createServer(function(requisição, resposta){
    let html = '<h1>PAGE NOT FOUND</h1>'
    if(requisição.url =='/'){
        html = fs.readFileSync('../index.html')
    }else if(requisição.url =='/livros'){
        html = fs.readFileSync('../livros.html')
    }

    resposta.end(html)
});
server.listen(3000)