"use client";

import { navLinks } from "@constants/constants";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import clsx from "clsx";
import { Fragment, useState } from "react";
import { navigateSect } from "@/app/_utils/helper";

function NavLinks() {
  const [activeLinks, setActiveLinks] = useState(false);

  return (
    <Fragment>
      <button
        onClick={() => setActiveLinks(!activeLinks)}
        className="cursor-pointer lg:hidden"
      >
        {activeLinks ? (
          <HiX className="size-6" />
        ) : (
          <HiOutlineMenu className="size-6" />
        )}
      </button>

      <div
        className={clsx(
          "flex lg:items-center gap-x-6 font-medium max-md:text-sm max-lg:absolute max-lg:top-full max-lg:bg-secondary-bg max-lg:w-full max-lg:left-0 max-lg:border-t max-lg:border-t-primary max-lg:px-4 max-lg:flex-col max-lg:z-10 max-lg:py-4 max-lg:text-start items-start transition-all duration-300",
          activeLinks
            ? "max-lg:opacity-100 max-lg:visible"
            : "max-lg:opacity-0 max-lg:invisible"
        )}
      >
        {navLinks.map(({ name, link }, i) => (
          <button
            onClick={() => navigateSect(link)}
            className="hover:text-primary transition-colors cursor-pointer max-lg:py-3"
            key={i}
          >
            {name}
          </button>
        ))}
      </div>
    </Fragment>
  );
}

export default NavLinks;
