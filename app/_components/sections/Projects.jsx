import { sections } from "@constants/constants";
import { getProjects } from "@services/getProjectRepo";
import Container from "../Container";
import Card from "../projects/Card";
import TitleSection from "../TitleSection";

async function Projects() {
  const projects = await getProjects(["portfolio", "backend"]);

  const isBackend = (topics = []) => topics.includes("backend");

  return (
    <section id={sections.projects} className="py-12">
      <Container className="space-y-8">
        <div className="space-y-3">
          <TitleSection title="Featured projects:" />
          <p>
            I have worked on many projects over the course of being a Web
            Developer, here are a few of my live, real-world projects
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.length
            ? projects.map((proj) => {
                const isBack = isBackend(proj.topics) ?? false;

                return <Card project={proj} key={proj.id} isBack={isBack} />;
              })
            : null}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
