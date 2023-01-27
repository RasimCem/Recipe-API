const User = require('../models/User');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email: email}).lean();
        if(user && await bcrypt.compare(password, user.password)){
            user.password = undefined;
            const token = jwt.sign({
                id: user._id,
                email: user.email
            }, process.env.JWT_SECRET_KEY);
            user.access_token = token;
            res.status(200).json(user);
        }else{
            res.status(404).json({message: "User not found"});
        }
    }catch(err) {
        console.log(err);
        res.status(500).json({error: err.message});
    }
}

const register = async (req, res) => {
    try{
        const { name, surname, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        let user = await User.create({
            name,
            surname,
            email,
            password: hashedPassword
        })
        user.password = undefined;
        res.status(201).json(user);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

module.exports = {
    login,
    register
}