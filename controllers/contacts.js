const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require("../models/contacts");

const { HttpError } = require("../helpers");

const addSchema = require("../schemas/contactsValidation");

const getAll = async (req, res, next) => {
  try {
    const contacts = await listContacts();
    res.status(200).json(contacts);
  } catch (error) {
    // res.status(500).json({ message: "Server error" });
    next(error);
  }
};

const getById = async (req, res, next) => {
  //   console.log(req.params);
  try {
    const { contactId } = req.params;
    const contactById = await getContactById(contactId);

    if (!contactById) {
      throw HttpError(404, "Not found");
      //   return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(contactById);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
    // next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    // console.log(error.details);
    const labelName = error.details[0].context.label;
    if (error) {
      return res
        .status(400)
        .json({ message: `Missing required ${labelName} field` });
    }
    const newContact = await addContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const remove = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const deletedContact = await removeContact(contactId);
    if (deletedContact === null) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({ message: "Contact deleted" });
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

const updateById = async (req, res, next) => {
  try {
    const { error } = addSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: "Missing fields" });
    }
    const { contactId } = req.params;
    const updatedContact = await updateContact(contactId, req.body);

    if (updatedContact === null) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
};

module.exports = {
  getAll,
  getById,
  add,
  remove,
  updateById,
};
