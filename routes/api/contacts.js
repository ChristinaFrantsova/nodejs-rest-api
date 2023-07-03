const express = require("express");
const router = express.Router();
const {
  getAll,
  getById,
  add,
  remove,
  updateById,
} = require("../../controllers/contacts");

router.get("/", getAll);

router.get("/:contactId", getById);

router.post("/", add);

router.delete("/:contactId", remove);

router.put("/:contactId", updateById);

module.exports = router;
