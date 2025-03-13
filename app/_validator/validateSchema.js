export function validateFormData(schema, data) {
  // Validate and filter extra fields
  const { value, error } = schema.validate(data, { stripUnknown: true });

  if (error)
    return { success: false, errors: error.details.map((err) => err.message) };

  return { success: true, data: value };
}
