import Container from "../Container";
import NavLinks from "./NavLinks";

function Nav() {
  return (
    <nav className="bg-secondary-bg py-6 relative">
      <Container>
        <div className="flex items-center justify-between gap-3">
          <div
            className="font-bold text-primary tracking-wider font-inter text-xl"
            title="Mohamed Saad"
          >
            M. Saad
          </div>

          {/* Links Navigate */}
          <NavLinks />
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
