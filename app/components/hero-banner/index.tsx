import "./Style.css";
import HeroImage from "../../assets/hero/banner.jpg";
export default function HeroBanner() {
    return (
        <section className="hero-banner" style={{ backgroundImage: `url(${HeroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <h1 className="hero-banner__title">Park in Peace</h1>
            <p className="hero-banner__description">Find your perfect parking spot</p>
        </section>
    );
}