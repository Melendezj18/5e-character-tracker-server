const express =require('express')

const Character = require('../models/character')

const router = express.Router()

//INDEX
// GET /characters
router.get('/characters', (req, res, next) => {
Character.find()
.then(characters => {
return characters.map(character => character)
})
.then(characters => {
res.status(200).json({ characters: characters })
})
.catch(error => {
res.status(404).json({ message: "No characters found" });
})
})

// SHOW
// GET /characters/:id
router.get('/characters/:id', (req, res, next) => {
Character.findById(req.params.id)
.then(character => {
res.status(200).json({ character: character })
})
.catch(error => {
res.status(404).json({ message: "Character not found" });
})
})

// CREATE
// POST /characters
router.post('/characters', (req, res, next) => {
// req.body
// character: {}
Character.create(req.body.character)
.then(character => {
// top lvl of this object is character
res.status(201).json({message: "Character created successfully", character: character })
})
.catch(error => {
res.status(400).json({ message: "Failed to create character" });
})
})



module.exports = router
