const User = require('../models/user');
const bcrypt = require('bcrypt');
const {generateToken} = require('../services/JwtUtil');

const login = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("Email Not Found");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Password Incorrect");
        }
        const token = generateToken(user);
        return token;
    } catch (error) {
        throw new Error("Invalid login service: " + error.message);
    }
};

module.exports = { login };