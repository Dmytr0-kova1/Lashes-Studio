import { GiHamburgerMenu } from "react-icons/gi";
import IconLogo from "./IconLogo";
import Container from "./Container";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header-container">
          <Link to="/" className="header-logo">
            <IconLogo />
            Lashes Nataliia
          </Link>
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
