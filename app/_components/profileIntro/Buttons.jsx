"use client";

import { navigateSect } from "@/app/_utils/helper";
import Button from "../Button";
import { HiEye, HiUser } from "react-icons/hi2";

function Buttons() {
  return (
    <div className="flex items-center gap-3 mt-4 max-lg:justify-center">
      <Button
        onClick={() => navigateSect(sections.about)}
        icon={<HiUser className="text-white size-4" />}
      >
        About me
      </Button>

      <Button
        onClick={() => navigateSect(sections.projects)}
        variant="outline"
        icon={<HiEye className="text-white size-4" />}
      >
        Projects
      </Button>
    </div>
  );
}

export default Buttons;
