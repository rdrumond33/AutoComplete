const Mongoose = require('mongoose');

const uri = 'mongodb://mongo:27017/Event';

Mongoose.Promise = global.Promise;
Mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    console.log('connegting mongodb');
}).catch((erro) => console.error('erro ao conectar banco: ' + erro))

module.exports = Mongoose