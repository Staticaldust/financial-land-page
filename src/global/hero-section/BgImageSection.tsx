import SubButtonForm from "../sub-button-form/SubButtonForm";
import MainText from "../main-text/MainText";
import "./BgImageSection.css";

const BgImageSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <MainText />
        <SubButtonForm />
      </div>
    </div>
  );
};

export default BgImageSection;
