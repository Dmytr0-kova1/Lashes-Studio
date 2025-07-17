import { GiHamburgerMenu } from "react-icons/gi";
import IconLogo from "../IconLogo/IconLogo";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";

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
