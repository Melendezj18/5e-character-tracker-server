const express = require('express')

const router = express.Router()

const Character = require('../models/character')

const startingCharacters = [
	{
		firstName: 'Sam',
		lastName: 'Gamgee',
		class: 'fighter',
		strength: 9,
		dexterity: 9,
		constitution: 10,
		intelligence: 9,
		wisdom: 13,
		charisma: 13
	},
	{
		firstName: 'Gandalf',
		lastName: 'The White',
		class: 'Wizard',
		strength: 8,
		dexterity: 10,
		constitution: 10,
		intelligence: 16,
		wisdom: 16,
		charisma: 12
	},
	{
		firstName: 'Aragorn',
		lastName: 'Strider',
		class: 'rogue',
		strength: 12,
		dexterity: 12,
		constitution: 13,
		intelligence: 10,
		wisdom: 14,
		charisma: 14
	},
]

// /seed/characters
router.get('/characters', (req, res, next) => {
    Character.deleteMany({})
        .then(() => {
            Character.create(startingCharacters)
                .then(characters => {
                    res.status(200).json({ characters: characters })
                })
        })
        .catch(next)
})

module.exports = router