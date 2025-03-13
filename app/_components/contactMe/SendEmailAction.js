import toast from "react-hot-toast";
import { sendEmailService } from "@services/sendEmail";
import { validateFormData } from "@validator/validateSchema";
import { contactSchema } from "@validator/contact.validator";

export async function sendEmailAction(formData) {
  const formObject = Object.fromEntries(formData.entries());

  // Validate Form Contact
  const { success, data, errors } = validateFormData(contactSchema, formObject);

  // Display Toast if not valid
  if (!success) {
    if (errors.length) errors.map((err) => toast.error(err));
    else toast.error("Validation Error");

    return;
  }

  // Send Email
  const { success: successSendEmail, message } = await sendEmailService(data);

  if (successSendEmail) toast.success(message);
  else toast.error(message);
}
