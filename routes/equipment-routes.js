const express =require('express')

const { handle404 } = require('../lib/custom-errors')

const Equipment = require('../models/equipment')

const router = express.Router()
