const http = require('http');
var urlParser = require('url'); 
const server = http.createServer().listen(3001);
// assigns the library 'http' and assigns it to the var http
//var urlParser = require('url'); // Adds urlParser
//const server = http.createServer().listen(3001);
// creates the sever and listen on port 3001
console.log('I/m listenening on port 3001');



server.on('request', function(request, response) {
    var urlObj  = urlParser.parse( request.url ); //
    var pathname = urlObj.pathname; // parsing our the important info in the url

    console.log(request.url);
    response.writeHead(200, {'Content-Type': 'text/html'});

    response.write('<html>');
    const message1 = "fun times";
    const fun = "drink";
    const fun2 = "lay";
    const fun3 = "strut";


if(pathname === '/fun-times'){
    response.write(`<h1>${message}!</h!>`)};
    response.write(`<ul><li>${fun}</li><li>${fun2}</li><li>${fun3}</li>`);

    
    
    
    
    
   // var urlObj  = urlParser.parse( request.url ); //
   // var pathname = urlObj.pathname; // parsing our the important info in the url

    
    //console.log("requested: " + pathname);
    
  
 //   response.writeHead(200, {'Content-Type': 'text/html'});// 200, everything is okay. Here is html, do what you need to do to make it look good
  
   // response.write('<html>Hello World!');// 
   // response.write('<script>console.log(\'I\'m client-side JavaScript being sent via server-side JavaScript\');</script>');
   // response.write('</html>');
   // response.end();
  });

  // This is how we make a server
  //10.1.4.77:3001 - this shows up Jamies computer
  // control C will take you out of writing in node. Do NOT use control Z.
  // run node server (the file name)