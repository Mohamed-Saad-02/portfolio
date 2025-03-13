import Image from "next/image";
import Container from "../Container";

import { sections } from "@constants/constants";
import Buttons from "./Buttons";

function ProfileIntro() {
  return (
    <section id={sections.home} className="grid pt-20 lg:pt-36">
      <Container className="w-full my-auto">
        <div className="flex lg:justify-between w-full max-w-6xl mx-auto max-lg:flex-wrap gap-x-4 max-lg:text-center">
          {/* Left content */}
          <div className="flex flex-col gap-4 lg:max-w-[435px] pt-6 lg:pt-12 max-lg:order-2 max-lg:mx-auto">
            <span className="lg:text-2xl font-semibold text-white font-poppins">
              Hello, i'm
            </span>
            <h1 className="lg:text-4xl text-2xl font-semibold font-poppins text-light">
              Mohamed Saad
            </h1>
            <p className="lg:text-lg font-poppins leading-relaxed text-sm">
              Front-End developer, Freelancer, I create seamless web experiences
              for users.
            </p>

            {/* Buttons */}
            <Buttons />
          </div>

          {/* Right circle */}
          <div className="relative max-lg:order-1 max-lg:mx-auto">
            <div className="lg:w-[450px] lg:h-[450px] rounded-full bg-primary grid">
              <Image
                src={"/profile.png"}
                width={480}
                height={480}
                alt="Profile Image"
                className="rounded-full m-auto lg:w-[480px] lg:h-[480px] w-[350px] h-[350px]"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProfileIntro;
