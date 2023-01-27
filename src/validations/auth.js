const Joi = require('joi');

const validateLoginRequest = (req, res, next) => {
    const loginSchema =  Joi.object({ 
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6).max(30)
    });
    const { error } = loginSchema.validate(req.body);
    if(error) {
        res.status(403).json(error.details);
    }else{
        next();
    }
}

const validateRegisterRequest = (req, res, next) => {
    const registerSchema = Joi.object({
        name:Joi.string().required().min(3).max(50),
        surname:Joi.string().required().min(3).max(50),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6).max(30)
    });
    const { error } = registerSchema.validate(req.body);
    if(error) {
        res.status(403).json(error.details);
    }else{
        next();
    }
}

module.exports = { validateLoginRequest, validateRegisterRequest}