const Mongoose = require('mongoose');

const EventSchema = new Mongoose.Schema({
    event: {
        type: String,
        require: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = EventSchema;