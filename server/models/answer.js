const mongoose = require('mongoose');
const commentSchema = require('./comment').schema;
const cleanSchema = require('../utils/cleanSchema');

const answerSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  body: {
    type: String,
    required: true,
    trim: true,
    minlength: 30,
  },
  comments: [commentSchema],
  points: {
    type: Number,
    default: 0,
  },
  upvotedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  downvotedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

cleanSchema(answerSchema);

module.exports = mongoose.model('Answer', answerSchema);
