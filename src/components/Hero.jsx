import Container from "./Container";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero-container">
          <h1 className="hero-title">
            Greetings! We are a beauty studio Lashes Nataliia!
          </h1>
          <button className="btn btn-hero">sign up</button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
