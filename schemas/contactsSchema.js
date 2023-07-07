const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required().min(3).max(30).alphanum(),
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  phone: Joi.string().required().min(6).max(13),
});

module.exports = addSchema;
