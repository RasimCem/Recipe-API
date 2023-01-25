const Recipe = require('../models/recipe');
const mongoose = require('mongoose');
const create = async (req, res) => {
    try {
        await Recipe.create({
            name: req.body.name,
            content: req.body.content,
            instructions: req.body.instructions,
            ingredients: req.body.ingredients,
            public: req.body.public === true ? true : false,
            user: new mongoose.Types.ObjectId()
        })
    res.send("eklendi!");

    }catch(err) {
        console.log(err);

    }
}

module.exports = {
    create
}