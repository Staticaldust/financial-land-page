import DialogButton from "../dialog-button/DialogButton";
import MainText from "../main-text/MainText";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <MainText />
        <DialogButton />
      </div>
    </div>
  );
};

export default HeroSection;
