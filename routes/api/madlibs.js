// routes/api/madlibs.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Madlib = require('../../models/Madlib');
const validateMadlibInput = require('../../validation/madlibs');

router.get('/', (req, res) => {
    Madlib.find()
        .sort({ date: -1 })
        .then(madlibs => res.json(madlibs))
        .catch(err => res.status(404).json({ nomadlibsfound: 'No madlibs found' }));
});

router.get('/user/:user_id', (req, res) => {
    Madlib.find({user: req.params.user_id})
        .then(madlibs => res.json(madlibs))
        .catch(err =>
            res.status(404).json({ nomadlibsfound: 'No madlibs found from that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Madlib.findById(req.params.id)
        .then(madlib => res.json(madlib))
        .catch(err =>
            res.status(404).json({ nomadlibfound: 'No madlib found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateMadlibInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newMadlib = new Madlib({
        text: req.body.body,
        user: req.user.id
      });
  
      newMadlib.save().then(madlib => res.json(madlib));
    }
);

module.exports = router;