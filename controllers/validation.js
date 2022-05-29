// Inicialização das bibliotecas que usaremos.
const {
    body,
    param,
    validationResult
} = require('express-validator');

// Importação dos dados mockados de filmes.
const movies = require('../data/movies.json');

// TODO: Checagem de erros para o método GET por ID
// Deve verificar se foi passado um id como parâmetro:
exports.movieGet = [
    // Checagem do id => se existe e se é numérico;
    param("id")
        .isDecimal()
        .withMessage("O ID deve ser numérico!")
        .custom(val => {
            const selectedMovie = movies.some(movie => {
                return parseInt(val) === movie.id
            });

            if (!selectedMovie) {
                throw new Error("Informe um ID existente no banco de dados!")
            }
            return true
        }
    )
];

// TODO: Checagem de erros para o método POST
// Deve verificar se todas as informações foram passadas como parâmetro:
exports.moviePost = [
    // Checagem da flag adult => se existe e se é booleano;
    // Checagem do id => se existe, se é único e se é numérico;
    // Checagem do original_language => se existe;
    // Checagem do original_title => se existe;
    // Checagem do overview => se existe;
    // Checagem do popularity => se existe e se é numérico;
    // Checagem do release_date => se existe e se está no formato certo "YYYY-MM-DD";
];

// TODO: Checagem de erros para o método Patch
// Deve verificar se foi passado o id e se possui informações para alterar:
exports.moviePatch = [
    // Checagem do id => se existe e se é numérico;
    // Checagem do parâmetro => as mesmas verificações do método POST;
]

// TODO: Checagem de erros para o método Delete
// Deve verificar se foi passado o id e se ele existe no "banco de dados":
exports.movieDelete = [
    // Checagem do id => se foi passado, se existe no banco e se é numérico;
]

exports.checkRules = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }
    next();
};