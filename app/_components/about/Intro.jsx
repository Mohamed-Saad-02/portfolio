import TitleSection from "../TitleSection";

const Highlight = ({ children }) => (
  <span className="text-primary text-lg font-medium">{children}</span>
);

function Intro() {
  return (
    <div className="space-y-3">
      <TitleSection title="About me:" />
      <p className="text-lg leading-[32px]">
        I am a Front-End Developer with{" "}
        <span className="text-primary font-medium text-2xl">
          +6 months of experience
        </span>
        , working as a freelancer specializing in <Highlight>React</Highlight>{" "}
        and <Highlight>Next.js</Highlight>. I have extensive experience with
        Tailwind CSS, Material UI, and Ant Design, building dynamic and
        interactive user interfaces. I also integrate Redux-persist and Axios to
        efficiently fetch and manage data from APIs.
      </p>

      <p className="text-lg leading-[32px]">
        Additionally, I work on transforming projects into mobile applications
        using <Highlight>Capacitor</Highlight>, ensuring high performance and an
        excellent user experience. I also have experience with{" "}
        <Highlight>MongoDB</Highlight> and <Highlight>Mongoose</Highlight> to
        build flexible databases.
      </p>

      <p className="text-lg leading-[32px]">
        I am always eager to improve my skills, write clean and efficient code,
        and develop innovative solutions that meet user needs.
      </p>
    </div>
  );
}

export default Intro;
