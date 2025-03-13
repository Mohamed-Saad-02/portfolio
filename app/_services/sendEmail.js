import emailjs from "@emailjs/browser";

export async function sendEmailService(data) {
  try {
    const { name, email, message, subject } = data;

    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      { name, subject, email, message },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, message: "Failed to send message." };
  }
}
