const http = require("http");
const url = require("url")

const server=http.createServer((req,res) =>{
const  parseUrl = url.parse(req.url,true);
console.log(parseUrl);
if(parseUrl.pathname ==='/'){
res.writeHead(200,{"Content-Type":"text/html"})
res.write("<h1>Home page</h1>")
res.end();
}else if(parseUrl.pathname ==='/about'){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h1>About Us</h1>")
    res.end();
}else if(parseUrl.pathname ==='/contact'){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("<h1>Contact Us</h1>")
    res.end();
}
else{
    res.writeHead(404,{"Content-Type":"text/html"})
    res.write("<h1>Page Not Found</h1>")
    res.end();  
}
});

server.listen(3000,() =>{
 console.log("Server running on http://localhost:3000");   
})