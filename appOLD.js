const http = require('http');

http.createServer((req, resp) => {

    resp.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Nestor Efren',
        edad: 'QueTe',
        url: req.url
    }

    resp.write(JSON.stringify(salida));
    resp.end();
}).listen(8080);

console.log('Escuchando el purto 8080');