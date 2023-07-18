// const { HttpError } = require("../helpers");

const validateFavorite = (schema) => {
  const func = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      res.status(400).json({ message: "missing field favorite" });
      return;
    }
    const { error } = schema.validate(req.body);
    res.status(200);
    next();
  };
  return func;
};

module.exports = validateFavorite;
