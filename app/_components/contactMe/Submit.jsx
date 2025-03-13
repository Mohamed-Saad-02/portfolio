"use client";

import { useFormStatus } from "react-dom";
import Button from "../Button";
import Spinner from "../Spinner";

function Submit() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} variant={pending ? "outline" : "default"}>
      {pending ? <Spinner /> : "Send"}
    </Button>
  );
}

export default Submit;
