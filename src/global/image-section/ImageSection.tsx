import { useState } from "react";
import SubButtonForm from "../sub-button-form/SubButtonForm";
import MainText from "./main-text/MainText";
import "./ImageSection.css";

const ImageSection = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const links = [
    {
      id: "electricity",
      title: "לניוד החשמל",
      url: "https://matara.pro/nedarimplus/Forms/2820.html?k=506",
      description: `לפני כשנה הוחלט במשרד האנרגייה על רפורמה חדשה בשוק החשמל בכל נושא המונופול של חברת החשמל, במסגרתה הוחלט לפתוח את עסק צריכת החשמל לעוד חברות, כך שנוצרה תחרות בין כמה חברות, דבר שהוביל להוזלת המחירים.

כיום ניתן לחסוך בין 6% ל־20% מהחשבון (תלוי במסלולים השונים), באמצעות ניוד החשבון מחברת החשמל לחברות האחרות.

חשוב להדגיש שבפועל חוץ מהגבייה שנעשית מול חברה אחרת, הכול ממשיך להתנהל מול חברת החשמל. החשמל בפועל מגיע מהם, וכן תקלות התחזוקה וכדומה, רק הגבייה נעשית מול החברה החדשה.

מבדיקה מקיפה של כלל החברות - המסלולים הזולים ביותר, כולל דמי מנוי חודשיים, הם של חברת בזק.

יכול לעבור גם מי שיש לו מונה רגיל ולא רק מי שיש לו מונה חכם (אם כי חלק מהמסלולים שייכים רק לבעלי מונה חכם)`,
      category: "חסכון",
    },
    {
      id: "lemichyatam",
      title: "להרשמה ׳למחייתם׳",
      url: "https://www.charidy.com/Lemichyatam/1361",
      description: `קרן 'למחייתם' מביאה עימה בשורה אדירה במקרי טרגדיה ל"ע: תמיכה בסך 1,500 ש"ח לכל יתום מחברי הקרן עד לחתונה או עד גיל 22 (המוקדם מהם).

לדוגמה, משפחה עם 10 יתומים תקבל תמיכה חודשית בסך 15,000 ש"ח, וכך יימנע הצורך בהקמת קרנות הכרוכות בביזיונות ליתומים הרכים.

התמיכה ליתומים נגבית בכל חודש מחברי הקרן, ממש בדיוק של רמת האגורה. בחודש אייר תשפ"ה (05/25) גבתה הקרן מ־24,512 בתי אב סכום של 1.02 ש"ח (!) שמצטברים יחד לסכום של 49,500 ש"ח עבור 33 יתומים מהקרן.

ובלי אותיות קטנות: קרן 'למחייתם' גובה בכל חודש סך 3 ש"ח בלבד עבור החברות בקרן ועלויות התפעול`,
      category: "צדקה",
    },
    {
      id: "insurance",
      title: "הוזלת ביטוחים וקרנות חיסכון",
      url: "https://www.charidy.com/Lemichyatam/1361",
      description:
        "ייעוץ מקצועי להוזלת ביטוחים וקרנות חיסכון. בדיקה מקיפה של כל הפוליסות שלך.",
      category: "חסכון",
    },
  ];

  const handleOpenDialog = (id: string) => setOpenDialog(id);
  const handleCloseDialog = () => setOpenDialog(null);

  return (
    <div className="hero">
      <div className="hero-content-wrapper">
        <MainText />
        <SubButtonForm />

        <div className="external-links-section">
          <h2 className="external-links-title">שירותים מומלצים</h2>
          <div className="external-cards-grid">
            {links.map((link) => (
              <div
                key={link.id}
                className="external-card"
                onClick={() => handleOpenDialog(link.id)}
                style={{ cursor: "pointer" }}
              >
                <div className="external-card-int">
                  <p className="external-card-int__title">{link.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dialogs */}
        {links.map((link) => (
          <div
            key={link.id}
            className={`external-dialog ${
              openDialog === link.id ? "open" : ""
            }`}
            onClick={handleCloseDialog}
          >
            <div
              className="external-dialog-content"
              onClick={(e) => e.stopPropagation()}
            >
              <h3>{link.title}</h3>
              <p>{link.description}</p>
              <div className="external-dialog-link">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-dialog-button"
                >
                  {link.title}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
