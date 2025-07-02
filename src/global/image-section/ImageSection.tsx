import SubButtonForm from "../sub-button-form/SubButtonForm";
import MainText from "./main-text/MainText";
import "./ImageSection.css";

const ImageSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <MainText />
        <SubButtonForm />
      </div>
    </div>
  );
};

export default ImageSection;
