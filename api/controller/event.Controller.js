const express = require('express');
const EventModel = require('../Models/Event.Model');

const Router = express.Router()

Router.get('/', async (req, res) => {
    try {
        return res.send(await EventModel.find())
    } catch (error) {
        return res.status(400).send(error)
    }
})

Router.post('/', async (req, res) => {
    try {

        const event = await EventModel.create(req.body)

        return res.redirect('/')

    } catch (error) {

    }

})

Router.get('/:reg', async (req, res) => {
    try {
        const regex = new RegExp(`^(${req.params.reg})`, 'i')
        const busca = await EventModel.find({ event: regex })
        const arrayBusca  = organizarDados(busca)
        res.json({arrayBusca})
    } catch (error) {

    }
})

const organizarDados = function (docs) {
    const arrayEvent = [];

    for (const object of docs) {
        if (!(arrayEvent.includes(object.event))) {
            arrayEvent.push(object.event)
        }
    }
    return arrayEvent
}


module.exports = Router