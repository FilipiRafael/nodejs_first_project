const http = require("http");


http
.createServer((request, response) => {
    response.writeHead(200, {"Content-type":"application/json"});
    response.end("Minha primeira aplicação com NodeJS");
})
.listen(4001, () => console.log("Servidor está rodando na porta 4001"));

