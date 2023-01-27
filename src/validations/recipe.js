const Joi = require('joi');

const validateRecipeCreateRequest = (req, res, next) => {
    const recipeCreateSchema =  Joi.object({ 
        name: Joi.string().required().max(60).min(3),
        description: Joi.string().required().min(10).max(500),
        instructions: Joi.array().required(),
        ingredients: Joi.array().required(),
        public: Joi.boolean()
    });
    const { error } = recipeCreateSchema.validate(req.body);
    if(error) {
        res.status(403).json(error.details);
    }else{
        next();
    }
}

const validateRecipeUpdateRequest = (req, res, next) => {
    const recipeUpdateSchema =  Joi.object({ 
        name: Joi.string().required().max(60).min(3),
        description: Joi.string().required().min(10).max(500),
        instructions: Joi.array().required(),
        ingredients: Joi.array().required(),
        public: Joi.boolean()
    });
   
    const { error } = recipeUpdateSchema.validate(req.body);
    console.log(error);
    if(error) {
        res.status(403).json(error.details);
    }else{
        next();
    }
}
module.exports = { validateRecipeCreateRequest, validateRecipeUpdateRequest }