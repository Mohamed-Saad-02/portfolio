import { sections } from "@constants/constants";
import Container from "@components/Container";
import Intro from "../about/Intro";
import Services from "../about/Services";

function AboutMe() {
  return (
    <section id={sections.about} className="py-12">
      <Container className="space-y-16">
        <Intro />
        <Services />
      </Container>
    </section>
  );
}

export default AboutMe;
