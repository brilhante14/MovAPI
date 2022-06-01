// Importação dos dados mockados de filmes.
const express = require('express');
const movies = require('../data/movies.json');

//TODO functions getMovie, createMovie, updateMovie, deleteMovie

// Deve retornar todos os filmes cadastrados no JSON mockado;
// Status code: 200 - OK
exports.getMovies = (req, res) => {
    res.status(200).send(movies);
}

// Deve retornar apenas um item específico que deverá ser passado como parâmetro da requisição;
// Corpo da requisição, exemplo: {"id": 238 } => Resposta esperada: Informações sobre o filme "The Godfather";
// Status code: 200 - OK
exports.getMovie = (req, res) => {}

// Deve ser capaz de realizar a requisição de cadastro de um filme com os campos solicitados:
// {
//     "adult": Boolean => Flag que informa se o filme possui conteúdo adulto;
//     "id": Number => Identificador do filme que deverá ser único;
//     "original_language": String, => Idioma original do filme;
//     "original_title": String, => Título original do filme;
//     "overview": String, => Descrição sobre o filme;
//     "popularity": Number, => Popularidade do filme;
//     "release_date": Date, => Data de lançamento do filme (YYYY-MM-DD);
//     "title": String, => Título que o filme será divulgado, em inglês;
//     "vote_average": Number, => Notas dos críticos;
//     "vote_count": Number => Quantidade de votos;
// }
// O controle de erros deve ser feito no arquivo validation.js
// Status code: 201 - Created
exports.createMovie = (req, res) => {}

// Deve ser capaz de realizar a atualização de um filme existente, passando como parâmetro o id do filme solicitado;
// Corpo da requisição, exemplo: {"id": 238, "vote_count": 200031 } => Resposta esperada: A quantidade de votos do filme "The Godfather" deve ser alterada para 200031;
// O controle de erros deve ser feito no arquivo validation.js
// Status code: 200 - OK
exports.updateMovie = (req, res) => {}

// Deverá realizar a remoção de um filme do nosso "banco de dados", passando como parâmetro o id do filme desejado;
// Corpo da requisição, exemplo: {"id": 238} => Resposta esperada: O filme "The Godfather" deve ser excluído;
// O controle de erros deve ser feito no arquivo validation.js
// Status code: 200 - OK
exports.deleteMovie = (req, res) => {}