var path = require ('path')
var express = require ('express')
var app = express();

app.use (express.static(path.join('public')))


app.get ('/', function (request, response){
    response.sendfile(path.join('./htmlFolder/index.html'))
})
app.get('/page/:pageid', function(request, response){
    
    response.sendfile(path.join(`./htmlFolder/${request.params.pageid}.html`))
})


app.get ('/testpage', function (request, response){
    response.sendfile(path.join('./htmlFolder/testpage.html'))
})

app.listen(3000);