import Joi from "joi";

// Define schema with allowed fields
export const contactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  subject: Joi.string().min(3).max(50).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(), // ✅ Fix
  message: Joi.string().min(5).max(500).required(),
}).unknown(false); // Remove unselected fields
