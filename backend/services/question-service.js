const QuestionModel = require('../models/question-model');
const JeeQuestionModel = require('../models/jeequestion-model');

class QuestionService {
    async findTopicsByChapter(chapter) {
        try {
            // Find all questions related to the provided chapter
            const questions = await JeeQuestionModel.find({chapter:chapter}).exec();
            if (questions.length === 0) {
                return [];
            }

            // Extract unique topics from the questions
            const topics = [...new Set(questions.map(q => q.topic))];

            return topics;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async findFirstQuestionByTopic(topic) {
        const question = await JeeQuestionModel.findOne({ topic })
            .sort({ Points: 1 })
            .exec();
        return question;
    }

    async findQuestionById(questionId) {
        const question = await JeeQuestionModel.findById(questionId);
        return question;
    }
    async findQuestionId(questionId) {
        const question = await JeeQuestionModel.findOne({Question_ID: questionId});
        return question;
    }
    async getNextQuestion(currentQuestionId) {
        const currentQuestion = await QuestionModel.findById(currentQuestionId);
        if (!currentQuestion) throw new Error('Current question not found');

        const nextQuestion = await QuestionModel.findOne({
            topic: currentQuestion.topic,
            points: { $gt: currentQuestion.points },
        }).sort({ points: 1 }).exec();

        return nextQuestion || null;
    }
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

module.exports = new QuestionService();
