const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      next(HttpError(400, "Missing fields"));
    }
    const { error } = schema.validate(req.body);
    if (error) {
      const labelName = error.details[0].context.label;
      next(HttpError(400, `Missing required ${labelName} field`));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
