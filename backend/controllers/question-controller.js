const UserService = require('../services/user-service');
const QuestionService = require('../services/question-service');
const SubmissionModel = require('../models/submission-model');



class QuestionController {
    async findTopics(req, res) {
        const { chapterName } = req.body;
        if (!chapterName) {
            return res.status(400).json({ message: 'Chapter is required' });
        }

        try {
            console.log(chapterName);
            const topics = await QuestionService.findTopicsByChapter(chapterName);
            res.json({ topics });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error fetching topics' });
        }
    }

    async getUserLevel(req, res) {
        const { username } = req.body;
        if (!username) {
            return res.status(400).json({ message: 'username is required' });
        }

        try {
            console.log(username);
            const level = await UserService.findLevelByUser(username);
            res.json(level);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error fetching topics' });
        }
    }

    async findFirstQuestionByTopic(req, res) {
        const { topic } = req.body;
        if (!topic) {
            return res.status(400).json({ message: 'Topic is required' });
        }

        try {
            const question = await QuestionService.findFirstQuestionByTopic(topic);
            res.json({ question });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error fetching question' });
        }
    }

    async findQuestionById(req, res) {
        const { questionId } = req.body;
        if (!questionId) {
            return res.status(400).json({ message: 'Question ID is required' });
        }

        try {
            const question = await QuestionService.findQuestionById(questionId);
            res.json({ question });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error fetching question' });
        }
    }

    async findQuestionId(req, res) {
        const { questionId } = req.body;
        if (!questionId) {
            return res.status(400).json({ message: 'Question ID is required' });
        }

        try {
            const question = await QuestionService.findQuestionId(questionId);
            res.json({ question });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error fetching question' });
        }
    }

    async getNextQuestion(req, res) {
        const { questionId } = req.body;
        if (!questionId) {
            return res.status(400).json({ message: 'Current Question ID is required' });
        }

        try {
            const question = await QuestionService.getNextQuestion(questionId);
            if (question) {
                res.json({ question });
            } else {
                res.status(404).json({ message: 'No more questions or move to the next topic.' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Error fetching next question' });
        }
    }

    async findSubmissionInfo(req,res){
        try {
            const { submissionIds } = req.body;
    
            const submissions = await SubmissionModel.find({ _id: { $in: submissionIds } })
                .select('_id timeSpent createdAt totalAttempts questionId')
                .exec();
    
            // Transform the data to match the required format
            const transformedSubmissions = submissions.map(submission => ({
                submissionId: submission._id,
                timeSpent: submission.timeSpent,
                submissionTimestamp: submission.createdAt,
                trials: submission.totalAttempts,
                questionId: submission.questionId
            }));
    
            res.json(transformedSubmissions);
        } catch (error) {
            console.error('Error fetching submission info:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async checkAnswer(req, res) {
        const { username, questionId, optionSelected, timeSpent } = req.body;

        if (!username || !questionId || !optionSelected || timeSpent === undefined) {
            return res.status(400).json({ message: 'Required fields are missing' });
        }

        try {
            const user = await UserService.findUser({ name: username });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const question = await QuestionService.findQuestionById(questionId);
            if (!question) {
                return res.status(404).json({ message: 'Question not found' });
            }

            const userId = user._id;
            const optionMap = {
                "A": "Option 1",
                "B": "Option 2",
                "C": "Option 3",
                "D": "Option 4"
            };

            const selectedOptionField = optionMap[optionSelected];
            if (!selectedOptionField) {
                return res.status(400).json({ message: 'Invalid option selected' });
            }

            // Handle submission
            let submission = await SubmissionModel.findOne({ userId, questionId });
            if (submission) {
                submission.totalAttempts += 1;
                submission.timeSpent = Math.max(timeSpent, submission.timeSpent);
                submission.optionSelected = optionSelected;
            } else {
                submission = new SubmissionModel({
                    userId,
                    questionId,
                    totalAttempts: 1,
                    timeSpent,
                    optionSelected,
                    doneStatus: false
                });
            }
            await submission.save();

            // Check answer correctness
            const correctOption = question.correct_option;
            const isCorrect = selectedOptionField === correctOption;

            if (!submission.doneStatus) {
                submission.doneStatus = isCorrect;
                await submission.save();
            }

            // Update rating and level with validation
            const points = Number(question.Points) || 0;
            const oldRating = Number(user.rating) || 0;
            const safeTimeSpent = Math.max(1, timeSpent); // Prevent division by zero
            const newRating = Math.max(0, oldRating + (points * 1.5) / safeTimeSpent);

            let newLevel = 0;
            if (newRating >= 10000) {
                newLevel = 10;
            } else {
                newLevel = Math.floor(newRating / 1000);
            }

            // Update user data
            const submissionId = submission._id.toString();

            // Update universal questions tracking
            if (isCorrect) {
                user.solvedQuestionsUniversal = [...new Set([...user.solvedQuestionsUniversal || [], submissionId])];
                user.incorrectQuestionsUniversal = (user.incorrectQuestionsUniversal || [])
                    .filter(id => id !== submissionId);
            } else {
                user.incorrectQuestionsUniversal = [...new Set([...user.incorrectQuestionsUniversal || [], submissionId])];
            }

            user.attempedQuestionsUniversal = [...new Set([...user.attempedQuestionsUniversal || [], submissionId])];
            user.rating = newRating;
            user.level = newLevel;

            if (newLevel !== user.level) {
                user.levelUpdates = [...(user.levelUpdates || []), new Date()];
            }

            await user.save();
            res.json({ correct: isCorrect });

        } catch (err) {
            console.error('Error in checkAnswer:', err);
            res.status(500).json({ message: 'Error processing answer', error: err.message });
        }
    }
}

module.exports = new QuestionController();
