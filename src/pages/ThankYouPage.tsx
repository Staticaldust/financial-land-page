import { Button } from "@mui/material";
import "../global/forms/subscribe-form/SubForm.css";
const ThankYouPage = () => {
  const navigate = () => (window.location.href = "/");
  return (
    <div className="container">
      <div className="heading">!נרשמת בהצלחה</div>
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1>.נשמח לראותך בכנס</h1>
        <h2>.פרטים נשלחו למייל</h2>
        <Button variant="contained" onClick={navigate}>
          חזרה לדף הראשי
        </Button>
      </div>
    </div>
  );
};

export default ThankYouPage;
