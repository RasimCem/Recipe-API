const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    instructions: [String],
    ingredients: {type: Array, required: true},
    public: { type: Boolean, default:false},
    user_id: {type: mongoose.Schema.Types.ObjectId}
});

module.exports = mongoose.model('Recipe', recipeSchema);