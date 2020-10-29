const express = require("express");
const router = express.Router();
const Costume = require("../models/costumes.js");





///////INDEX
router.get("/", (req, res) => {
  Costume.find({}, (err, foundHolidays) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundHolidays);
  });
});


///NEW - we dont do this with an API 

/////CREATE
router.post("/", (req, res) => {
  Costume.create(req.body, (error, createdHoliday) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(createdHoliday); //  .json() will send proper headers in response so client knows it's json coming back
  });
});




//////DELETE
router.delete("/:id", (req, res) => {
  Costume.findByIdAndRemove(req.params.id, (err, deletedHoliday) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedHoliday);
  });
});


////UPDATE

router.put("/:id", (req, res) => {
  Costume.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedHoliday) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedHoliday);
    }
  );
});

module.exports = router;