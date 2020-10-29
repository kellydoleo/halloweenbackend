const express = require("express")
const router = express.Router();
const Candy = require("../models/candy")


/////INDEX 
router.get("/", (req, res) => {
    Candy.find({}, (err, foundCandy) => {
        if(err) {
            res.status(400).json({ error: err.message})
        }
        res.status(200).json(foundCandy)
    })
}
)

///NEW - we don't need for an API


/////CREATE ROUTE
router.post("/", (req, res) => {
    Candy.create(req.body, (err, createdCandy) => {
        if(err) {
            res.status(400).json( {error: err.message })
        }
        res.status(200).json(createdCandy)
    })
})


////DELETE ROUTE
router.delete("/:id", (req, res) => {
    Candy.findByIdAndRemove(req.params.id, (err, deletedCandy) => {
        if(err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(deletedCandy)
    })
})


//UPDATE ROUTE 
router.put("/:id", (req, res) => {
    Candy.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true},
        (err, updatedCandy) => {
            if(err) {
                res.status(400).json({ error: err.message})
            }
            res.status(200).json(updatedCandy)
        }
    )
})


module.exports = router;