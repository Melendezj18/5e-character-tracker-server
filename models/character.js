const mongoose = require('mongoose')

const Schema = mongoose.Schema

const characterSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		class: {
			type: String,
			required: true,
		},
        strength: {
            type: Number,
            required: true,
            min: 1,
            max: 30
        },
        dexterity: {
            type: Number,
            required: true, 
            min: 1,
            max: 30
        },
        constitution: {
            type: Number,
            required: true,
            min: 1,
            max: 30
        },
        intelligence: {
            type: Number,
            required: true,
            min: 1,
            max: 30
        },
        wisdom: {
            type: Number,
            required: true,
            min: 1,
            max: 30
        },
        charisma: {
            type: Number,
            required: true,
            min: 1,
            max: 30
        }

	},
	{
        timestamps: true
    }
)

const Character = mongoose.model('Character', characterSchema)

module.exports = Character