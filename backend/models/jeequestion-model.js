const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jeeQuestionSchema = new Schema({
    Question_ID: { type: Number, required: true, unique: true },
    Question: { type: String, required: true }, // This will store the LaTeX question
    option1: { type: String, required: true },
    option2: { type: String, required: true },
    option3: { type: String, required: true },
    option4: { type: String, required: true },
    correct_option: { type: String, required: true },
    Subject: { type: String, required: true },
    chapter: { type: String, required: true },
    topic: { type: String, required: true },
    Section: { type: String, required: true }
}, {
    timestamps: true,
    toJSON: { getters: true },
});

// Create a Mongoose model using the schema
module.exports = mongoose.model('JeeQuestion', jeeQuestionSchema, 'JeeCodeQuestions');
