/**
 * 
 * Uma api que roda Localmete usando o Express e o banco mongodb 
 * 
 */
const api = require('./api/app')

api.start(8080);