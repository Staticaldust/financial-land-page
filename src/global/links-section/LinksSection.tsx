import "./LinksSection.css";

const links = [
  {
    title: "ליצירת טופס ניוד מחברת החשמל",
    url: "https://matara.pro/nedarimplus/Forms/2820.html?k=506",
  },
  {
    title: "למעבר לאתר למחייתם",
    url: "https://www.charidy.com/Lemichyatam/1361",
  },
];

const LinkSection = () => {
  return (
    <div className="links-section">
      <h2 className="section-title">קישורים חיצוניים</h2>
      <div className="links-grid">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinkSection;
