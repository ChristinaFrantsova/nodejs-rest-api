const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  add,
  remove,
  updateById,
} = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");
const addSchema = require("../../schemas/contactsSchema");

router.get("/", getAll);

router.get("/:contactId", getById);

router.post("/", validateBody(addSchema), add);

router.delete("/:contactId", remove);

router.put("/:contactId", validateBody(addSchema), updateById);

module.exports = router;
