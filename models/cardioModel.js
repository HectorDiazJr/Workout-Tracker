const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
        type: {
        type: String,
        required: true,
        },
        name:
        {
        type: String,
        },
        distance:
        {
        type: Number,
        },
        duration: 
        {
        type: Number,
        }
}),
