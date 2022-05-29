// Inicialização das bibliotecas que usaremos.
const express = require('express');
const validations = require('../controllers/validation')
const router = express.Router();

// Controllers de cada método
const {
    getMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
} = require('../controllers/movies');

// TODO: Método GET geral:
router.get('/', getMovies)

// TODO: Método GET específico:
router.get('/:id', validations.movieGet, validations.checkRules, getMovie)

// TODO: Método POST. 
router.post('/', validations.moviePost, validations.checkRules, createMovie)

// TODO: Método PATCH.
router.patch('/:id', validations.moviePatch, validations.checkRules, updateMovie)

// Método DELETE.
router.delete('/:id', validations.movieDelete, validations.checkRules, deleteMovie)

// Exportação do componente.
module.exports = router;