const jwt = require('jsonwebtoken');

const secretekey = "This is Obviusualy secrete key!"; 

const authMiddleware = (req, res, next) => {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token." });
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, secretekey);
        req.user = decoded;

        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: "Access denied" });
        }

        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token." });
    }
};

module.exports = authMiddleware;
