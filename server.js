const express = require('express')
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Nestor efren HerNanDEz',
        anio: new Date().getFullYear()
    });

});


app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });

});

app.get('/data', (req, res) => {
    res.send('Que ondas mundo');

})


app.listen(port, () => {
    console.log(`Escuchando en puesto ${ port }`);
});