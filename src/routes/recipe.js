const router = require("express").Router();
const { getById, getAll, create , update, remove} = require("../controllers/recipe");
const { validateRecipeCreateRequest, validateRecipeUpdateRequest } = require("../validations/recipe");
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', validateRecipeCreateRequest, create);
router.put('/:id', validateRecipeUpdateRequest, update);
router.delete('/:id', remove);

module.exports = router;