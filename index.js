// Inicialização das bibliotecas que usaremos.
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Importação dos componentes que renderizam as rotas
const moviesRoutes = require('./routes/movies.js');

// Configurações gerais da aplicação.
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Rotas da aplicação
app.use('/movies', moviesRoutes);

// Inicialização da aplicação
app.listen(PORT, () => console.log("Server running on: http://localhost:5000/movies"));