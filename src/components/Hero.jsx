import { useNavigate } from "react-router-dom";
import Container from "./Container";

const Hero = () => {
  const navigete = useNavigate();

  const handleClick = () => {
    navigete("/services");
  };

  return (
    <section className="hero">
      <Container>
        <div className="hero-container">
          <h1 className="hero-title">
            Greetings! We are a beauty studio Lashes Nataliia!
          </h1>
          <button className="btn btn-hero" onClick={handleClick}>
            sign up
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
