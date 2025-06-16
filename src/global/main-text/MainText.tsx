import { BLUE, YELLOW } from "@/helpers/navbar.helpers";
import DialogButton from "../dialog-button/DialogButton";
import "./MainText.css";
YELLOW;
BLUE;
const MainText = () => (
  <div className="hero2">
    <div className="hero-content">
      <h1 className="hero-title">שליטה בכסף שלך מתחילה בהחלטה אחת</h1>
      <p className="hero-subtitle">הצטרף עכשיו – ובנה עתיד כלכלי בטוח יותר</p>
      <DialogButton />
    </div>
  </div>
);

export default MainText;
