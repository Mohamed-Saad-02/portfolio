"use client";

import { sendEmailAction } from "./SendEmailAction";
import Submit from "./Submit";

function FormContact() {
  return (
    <div>
      <h4 className="text-xl">Contact me, let's make magic together</h4>

      <form
        action={sendEmailAction}
        id="contact-form"
        className="mt-6 grid gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name:"
          required
          className="outline-none rounded-lg px-4 bg-[#32323f] min-h-12"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject:"
          required
          className="outline-none rounded-lg px-4 bg-[#32323f] min-h-12"
        />
        <input
          type="email"
          name="email"
          placeholder="Email:"
          required
          className="outline-none rounded-lg px-4 bg-[#32323f] min-h-12"
        />
        <textarea
          name="message"
          placeholder="Message:"
          required
          className="outline-none rounded-lg px-4 pt-3 bg-[#32323f] min-h-24"
        ></textarea>

        <Submit />
      </form>
    </div>
  );
}

export default FormContact;
