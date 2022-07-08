var express = require('express')
var app = express()

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.render('index.html')
});

app.use(function(req,res,next){
    res.status(404).send("pagina non trovata")
    //anche .render di una pagina custom di html
})

let port = 3000;
app.listen(port, function(){
    console.log("server running on port " + port)
})
