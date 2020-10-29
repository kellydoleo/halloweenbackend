const mongoose = require("mongoose");

const partySchema = mongoose.Schema({
    name: { type: String },
    img: { type: String},
    type: [{ type: String}] ////type chocolate, fruity, etc
});

module.exports = mongoose.model("Party", partySchema)