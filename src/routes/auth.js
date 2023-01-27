const router = require('express').Router();
const { login, register } = require("../controllers/auth"); 
const { validateLoginRequest, validateRegisterRequest } = require("../validations/auth"); 

router.post('/login', validateLoginRequest, login);

router.post('/register', validateRegisterRequest, register)

module.exports = router;
