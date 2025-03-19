const loginservice = require('../services/login');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await loginservice.login(email, password);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

module.exports = { login };