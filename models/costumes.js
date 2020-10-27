const mongoose = require("mongoose");

const costumeSchema = mongoose.Schema({
    name: { type: String },
    price: {type: String},
    img: { type: String},
    type: [{ type: String}] ////type includes gender specific/gender neutral, kid/adult 
});

module.exports = mongoose.model("Costume", costumeSchema)