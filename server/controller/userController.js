const userService = require('../services/register')

const createUser = async (req,res) =>{
    const data = req.body
    try {
        const userdata = await userService.createUser(data)
        res.status(201).json('User Created Succesfully')
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {createUser}