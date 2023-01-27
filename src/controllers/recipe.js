const Recipe = require('../models/recipe');
const mongoose = require('mongoose');

const getById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        res.json({data:recipe});
    }catch(err){
        res.status(500).json(err);
    }
}

const getAll = async (req, res) => {
    try {
        const recipes = await Recipe.find({});
        res.json({data:recipes});
    }catch(err){
        res.status(500).json(err);
    }
}

const create = async (req, res) => {
    try {
        const recipe = await Recipe.create({
            name: req.body.name,
            description: req.body.description,
            instructions: req.body.instructions,
            ingredients: req.body.ingredients,
            public: req.body.public === true ? true : false,
            user_id: req.user.id 
        })
        res.status(201).json({data: recipe, message: 'Recipe created.'});
    }catch(err) {
        res.status(500).json(err);
    }
}

const update = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                description: req.body.description,
                instructions: req.body.instructions,
                ingredients: req.body.ingredients,
                public: req.body.public === true ? true : false,
                user: req.user.id
        }, {new: true});
        res.status(200).json({data: recipe, message: 'Recipe updated.'});
    }catch(err) {
        res.status(500).json(err);
    }
}

const remove = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndRemove(req.params.id);
        res.status(200).json({data: recipe, message: 'Recipe removed.'});
    }catch(err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getById, getAll, create, update, remove
}