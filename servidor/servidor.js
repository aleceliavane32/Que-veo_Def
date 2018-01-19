
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


app.get('/peliculas/recomendacion', controladorPeliculas.recomendarPelicula);
app.get('/peliculas', controladorPeliculas.obtenerListado);
app.get('/peliculas/:id', controladorPeliculas.obtenerPelicula);
app.get('/generos', controladorPeliculas.obtenerGeneros);


var puerto = '8080';

app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});
