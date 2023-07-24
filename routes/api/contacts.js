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
  authenticate,
} = require("../../middlewares");
const { schemas } = require("../../models/contact");

router.get("/", authenticate, getAll);

router.get("/:contactId", authenticate, isValidId, getById);
// не шукає по id

router.post("/", authenticate, validateBody(schemas.addSchema), add);
// не працює додавання разом з Joi схемою

router.delete("/:contactId", authenticate, isValidId, remove);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateFavorite(schemas.updateFavoriteSchema),
  updateFavorite
);

module.exports = router;
