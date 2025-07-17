import { GiHamburgerMenu } from "react-icons/gi";
import IconLogo from "./IconLogo";
import Container from "./Container";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header-container">
          <a href="" className="header-logo">
            <IconLogo />
            Lashes Nataliia
          </a>
          <Navigation />
          <button className="header-btn">
            <GiHamburgerMenu />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
