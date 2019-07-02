const express = require('express');

const port = process.env.port || 8000;
const address = 'http://127.0.0.1';

const app = express();


require('./tests');

app.listen(port , (err) => {
    (err) ? console.error(`Ocorreu o seguinte erro ${err}`) : 
    console.log(`Servidor iniciado com sucesso no endereço : ${address}:${port}`)
});

