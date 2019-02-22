const Mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/Event';

Mongoose.Promise = global.Promise;
Mongoose.connect(uri,{useNewUrlParser: true}).then(()=>{
        console.log('connegting mongodb');
    }).catch((erro)=>console.error('erro ao conectar banco'))

module.exports =  Mongoose