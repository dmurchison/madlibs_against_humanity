// routes/api/madlibs.js

// This is the file where we'll create the routes for our Madlibs as well as
// exceptions for the routes that require authentication. We'll also be using
// the same validation we created in the last section to validate our Madlib
// data.


const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Madlib = require('../../models/Madlib');
const validateMadlibInput = require('../../validation/madlibs');


router.get('/', (req, res) => {
    Madlib.find()
        .populate('user')
        .sort({ date: -1 })// sort by date, newest first
        .then(madlibs => res.json(madlibs))
        .catch(err => res.status(404).json({ nomadlibsfound: 'No madlibs found' }));
});

router.get('/user/:user_id', (req, res) => {
  Madlib.find({user: req.params.user_id})
    .then(madlibs => res.json(madlibs))
    .catch(err =>
      res.status(404).json({ nomadlibsfound: 'No madlibs found from that user' })
    );
});

router.get('/:id', (req, res) => {
  Madlib.findById(req.params.id)
    .then(madlib => res.json(madlib))
    .catch(err =>
      res.status(404).json({ nomadlibfound: 'No madlib found with that ID' })
    );
});

router.delete('/:id', (req, res) => {
  Madlib.deleteOne({_id: req.params.id})
    .then(res.json({message:"Deleted!"})) // not displaying. displays err message instead
    .catch(err =>
      res.status(404).json({ nomadlibfound: 'No madlib found with that ID' })
    );
});

router.patch('/:id', (req, res) => {

  const query = {_id: req.params.id}
  const regexForBlanks = /(?<=\[).[^\]]*/g;

  const editData = {
    body: req.body.body,
    title: req.body.title,
    blanks: req.body.body.match(regexForBlanks),
    reviews: req.body.reviews,
    reviewers: req.body.reviewers,
    rating: req.body.rating,
  }

  Madlib.findOneAndUpdate(query, editData, (err, doc) => {
    if (err) return res.status(404).json(errors);
    return res.json(doc);
  });
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateMadlibInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const regexForBlanks = /(?<=\[).[^\]]*/g; // regular expression denoting all substrings contained in brackets (excluding the brackets)

    const newMadlib = new Madlib({
      body: req.body.body,
      user: req.user.id,
      title: req.body.title,
      blanks: req.body.body.match(regexForBlanks)
    });

    newMadlib.save().then(madlib => res.json(madlib));
  }
);

module.exports = router;
