import { sections } from "@constants/constants";
import Container from "../Container";
import TitleSection from "../TitleSection";
import SocialConnect from "../SocialConnect";
import FormContact from "../contactMe/FormContact";

function ConnectMe() {
  return (
    <section id={sections.contact} className="py-12">
      <Container>
        <div className="flex justify-between gap-x-3 flex-wrap gap-y-8">
          <div className="space-y-4">
            <TitleSection title="Connect with me:" />
            <p>Satisfied with me? Please contact me</p>
            <SocialConnect />
          </div>

          <FormContact />
        </div>
      </Container>
    </section>
  );
}

export default ConnectMe;
