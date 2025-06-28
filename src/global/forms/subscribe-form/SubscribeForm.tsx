import { emailRegex } from "@/utils/regex.utils";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import "./SubscribeForm.css";

const SubscribeForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setPending(true);

    try {
      emailjs.sendForm(
        "service_96uaes6",
        "template_q6i3iis",
        formRef.current,
        "sVNbZ6W6KBZK8Evgr"
      );
      setMessage("נרשמת בהצלחה! נשלח אליך מייל תודה.");
      formRef.current?.reset();
    } catch (error) {
      console.error("שגיאה בהגשת הטופס:", error);
      setMessage("אירעה שגיאה. נסה שוב.");
    } finally {
      setPending(false);
    }
  };
  const isNameValid = formData.name.trim() !== "";

  const isFormValid = isNameValid && emailRegex.test(formData.email);

  return (
    <div className="container">
      <div className="heading">פרטים</div>
      <form
        className="form"
        ref={formRef}
        style={{ direction: "rtl" }}
        onSubmit={handleSubmit}
      >
        <input
          className="input"
          type="text"
          name="name"
          id="name"
          placeholder="שם מלא"
          value={formData.name}
          onChange={handleChange}
          title="יש להזין שם מלא"
        />

        <input
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="אימייל"
          value={formData.email}
          pattern=".*\S.*" // לא רק רווחים
          onChange={handleChange}
          title="יש להזין אימייל תקין"
        />

        <input
          className={`subscribe-button ${isFormValid ? "validate-form" : ""}`}
          type="submit"
          value="הרשמה"
          disabled={!isFormValid}
          style={{
            cursor: isFormValid ? "pointer" : "not-allowed",
            opacity: isFormValid ? 1 : 0.5,
          }}
        />
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default SubscribeForm;
