const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  add,
  remove,
  updateById,
  updateFavorite,
} = require("../../controllers/contacts");

const {
  validateBody,
  isValidId,
  validateFavorite,
} = require("../../middlewares");
const schemas = require("../../models/contact");

router.get("/", getAll);

router.get("/:contactId", isValidId, getById);
// не шукає по id

router.post("/", validateBody(schemas.addSchema), add);
// не працює додавання разом з Joi схемою

router.delete("/:contactId", isValidId, remove);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateFavorite(schemas.updateFavoriteSchema),
  updateFavorite
);

module.exports = router;
