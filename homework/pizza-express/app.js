// app.js

//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;

app.get("/", (req, res) => {
    const message = "Welcome to Pizza Express!"

    res.send( message )
})
app.get('/topping/:type', function(req, res, next) {
    let type = (req.query.params);
        res.send(message);
});

// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});