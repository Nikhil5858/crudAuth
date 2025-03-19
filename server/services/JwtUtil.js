const jwt = require('jsonwebtoken');

const secretekey = "This is Obviusualy secrete key!";

const generateToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role,
    };
    return jwt.sign(payload, secretekey, { expiresIn: '1h' });
};

module.exports = {generateToken};