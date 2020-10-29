const express = require("express");
const router = express.Router();
const Party = require("../models/party.js")


////INDEX ROUTE
router.get("/", (req, res) => {
    Party.find({}, (err, foundParties) => {
        if(err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundParties)
    })
})

///NEW route is not needed in API 

////CREATE 
router.post("/", (req, res) => {
    Party.create(req.body ,(err, createdParty) => {
        if(err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(createdParty)
    })
})

////DELETE ROUTE 
router.delete("/:id", (req, res) => {
    Party.findByIdAndRemove(req.params.id, (err, deletedParty) => {
        if(err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json({ error: err.message})
    });
});


//UPDATE ROUTE
router.put("/:id", (req, res) => {
    Party.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedParty) => {
            if(err) {
                res.status(400).json({error: err.message})
            }
            res.status(200).json(updatedParty)
        }
    )
})

module.exports = router; 