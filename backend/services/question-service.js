const mongoose = require('mongoose');
const SubmissionModel = require('../models/submission-model');
const QuestionModel = require('../models/question-model');

class questionService{
    async findTopics(chapterName){
        try {
            const topics = await QuestionModel.aggregate([
                { $match: { chapter: chapterName } },
                { $group: { _id: "$topic", count: { $sum: 1 } } },
                { $project: { topic: "$_id", count: 1, _id: 0 } }
            ]);
    
            // console.log(topics);
            return topics;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
    async getQuestionsByChapter(chapter) {
        return QuestionModel.find({ chapter }).exec();
    }
    async getSubmissionsByUserAndQuestions(userId, questionIds) {
        return SubmissionModel.find({ userId, questionId: { $in: questionIds }, doneStatus: true }).exec();
      }
      
}
module.exports = new questionService();