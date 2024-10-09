const UserModel = require('../models/user-model');
const hashService = require('./hash-service');

class UserService {
    async findUser(filter) {
        const user = await UserModel.findOne(filter);
        return user;
    }
    async findLevelByUser(username) {
        try {
            // Search for the user by username in the UserModel
            const user = await UserModel.findOne({ name: username }).exec();
            
            // If the user is not found, return null or throw an error
            if (!user) {
                console.error(`User with username ${username} not found.`);
                return null;
            }
    
            // Return the user's level
            return user.level;
        } catch (err) {
            console.error('Error finding user level:', err);
            throw err;
        }
    }
    
    async createUser(data) {
        // Hash the password before saving it to the database
        const hashedPassword = await hashService.hashPassword(data.password);
        const user = await UserModel.create({ email: data.email, password: hashedPassword,name:data.name });
        return user;
    }

    async findPassword(email, password) {
        // Find the user by email
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return false;
        }
        // Verify the provided password with the stored hashed password
        return await hashService.verifyPassword(password, user.password);
    }
}

module.exports = new UserService();