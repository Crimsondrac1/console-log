const mongoose = require('mongoose');
const cleanSchema = require('../utils/cleanSchema');

const commentSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  body: { type: String, required: true, trim: true, minlength: 5 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

cleanSchema(commentSchema);

module.exports = mongoose.model('Comment', commentSchema);
