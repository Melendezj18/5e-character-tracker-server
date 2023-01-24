const express =require('express')

const { handle404 } = require('../lib/custom-errors')
const Character = require('../models/character')

const router = express.Router()

//CREATE
router.post('/equipment', requireToken, (req, res, next) => {
    const characterId = req.body.equipment.characterId

    console.log(req.user)

    const equipment = req.body.equipment
    equipment.owner = req.character._id

    Character.findById(characterId)
        .then(handle404)
        .then(character => {
            character.equipment.push(note)

            return character.save()
        })
        .then(character => {
            res.status(201).json({ character: character })
        })
    .catch(next)
})

// UPDATE
router.patch('/equipment/:equipmentId', requireToken, (req, res, next) => {
    const characterId = req.body.equipment.characterId

    const noteBody = req.body.equipment

    Character.findById(characterId)
        .then(handle404)
        .then(character => {
            const equipment = character.equipment.id(req.params.noteId)

            equipment.set(equipmentBody)

            return character.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

// DELETE
router.delete('/equipment/:equipmentId', requireToken, (req, res, next) => {
    const characterId = req.body.equipment.campaignId

    Character.findById(characterId)
        .then(handle404)
        .then(character => {
            //finding the correct note to remove
            //.remove() we delete it
            character.equipment.id(req.params.equipmentId).remove()

            // since I've modified I have to save
            return character.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router