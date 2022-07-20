// models/Madlib.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MadlibSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  blanks: {
    type: Array,
    // required: true
  },
  category: {
    type: String
  },
  reviews: {
    type: Array
  },
  reviewers: {
    type: Array
  },
  rating: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Madlib = mongoose.model('madlib', MadlibSchema);