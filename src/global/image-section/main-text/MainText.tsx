import "./MainText.css";
const MainText = () => (
  <div
    style={{
      // height: "100vh",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "white",
      position: "relative",
    }}
  >
    <div className="hero-content">
      <h1 className="hero-title">מתייעלים כלכלית - צעד אחר צעד</h1>
      <p className="hero-subtitle">שחר טוב - עזרה הדדית</p>
    </div>
  </div>
);

export default MainText;
