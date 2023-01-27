const express = require('express');
const app = express();
const connectMongoDB = require('./db/connect');
require('dotenv').config();
const authRouter = require('./routes/auth');
const recipeRouter = require('./routes/recipe');
const verifyAccessToken = require('./middlewares/auth');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    await connectMongoDB(process.env.MONGO_URI);
    console.log(`App listening on port ${PORT}`)
});

// Authentication
app.use('/api/v1', authRouter);

// JWT Verification
app.use(verifyAccessToken);

// Recipes
app.use('/api/v1/recipes', recipeRouter);
