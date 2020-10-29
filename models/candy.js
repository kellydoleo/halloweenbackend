const mongoose = require("mongoose");

const candySchema = mongoose.Schema({
    name: { type: String },
    price: {type: String},
    img: { type: String},
    type: [{ type: String}] ////type chocolate, fruity, etc
});

module.exports = mongoose.model("Candy", candySchema)