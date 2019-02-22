const MongoDB = require('../database/mongodb');
const EventSchema = require('../database/schemas/event.Schema');

const EventModel = MongoDB.model('Events',EventSchema)


module.exports = EventModel