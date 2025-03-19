const User = require('../models/user')
const bcrypt = require('bcrypt')

const createUser = async (userData) =>{
    const {name,email,password} = userData;;
    const hashedPassword =  await bcrypt.hash(password,10)

    const usercreate = new User({
        name,
        email,
        password:hashedPassword,
        role:'user'
    });

    await usercreate.save();
}
module.exports = {createUser}