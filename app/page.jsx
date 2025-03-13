import { Fragment, Suspense } from "react";
import ProfileIntro from "./_components/profileIntro/ProfileIntro";
import AboutMe from "./_components/sections/AboutMe";
import Projects from "./_components/sections/Projects";
import ConnectMe from "./_components/sections/ConnectMe";
import Spinner from "./_components/Spinner";

export default function Home() {
  return (
    <Fragment>
      <ProfileIntro />
      <div className="bg-secondary-bg h-32 lg:-mt-16 relative max-lg:mt-10"></div>
      <AboutMe />

      <Suspense fallback={<Spinner />}>
        <Projects />
      </Suspense>

      <ConnectMe />
    </Fragment>
  );
}
