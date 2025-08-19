import clsx from "clsx";
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => clsx("link", isActive && "active");

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/services">
        Services
      </NavLink>
      <NavLink className={buildLinkClass} to="/aboutMe">
        About me
      </NavLink>
    </nav>
  );
};

export default Navigation;
