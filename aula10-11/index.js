const express = require('express')
const app = express()
app.use(express.json())
//app.use(express.static('public'))
app.get('/',(req,res) =>{
    console.log("recebi aqui man")
    res.send("eae man?")
})
app.post('/',(req, res) => {
    console.log("POST RECEBIDO MAN")
    console.log(req.body)
    pessoa = req.body
    res.send(pessoa)
})
app.delete('/',(req,res) => {
    console.log("DELETE RECEBIDO MAN")
    res.send("delete deleteado e não ignorado")
})
app.listen(3000,function(){console.log("DUBINGOOOO LEGAUUUUUUUU")})