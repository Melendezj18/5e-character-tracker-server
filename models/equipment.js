const mongoose = require('mongoose')

const Schema = mongoose.Schema

const equipmentSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        weight : {
            type: Number,
            required:  true
        },
        owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Character',
			default: null,
			nullable: true
		},

    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model('Equipment', equipmentSchema)