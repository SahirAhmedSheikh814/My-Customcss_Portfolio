import Image from "next/image";
import "../style/hero.css";

function Hero() {
  return (
    <div className="header-container">
      <div className="header-boxes-con">
        {/* left */}
        <div>
          <Image
            src={"/images/HeroSa.png"}
            alt="Profile Image"
            width={200}
            height={200}
            className="header-image"
          />
        </div>
        {/* right */}
        <div className="hero-right-div">
          <h1 className="title-hero">I'm Sahir Ahmed Front-end Developer</h1>
          <p className="des-hero">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            voluptates optio accusamus vitae modi. Vero ullam suscipit
            reiciendis, iusto blanditiis qui explicabo debitis quod non natus.
          </p>
          <button className="hero-btn">HIRE ME</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
