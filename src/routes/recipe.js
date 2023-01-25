const router = require("express").Router();
const { create } = require("../controllers/recipe");

router.post('/', create);

module.exports = router;