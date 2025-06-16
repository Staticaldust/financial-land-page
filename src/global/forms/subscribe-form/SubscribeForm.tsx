import { useState } from "react";
import "./SubscribeForm.css";
import { BLUE } from "@/helpers/navbar.helpers";
const isValidEmail = (email: string) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};
BLUE;
const SubscribeForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isNameValid = formData.name.trim() !== "";

  const isFormValid = isNameValid && isValidEmail(formData.email);

  return (
    <div className="container">
      <div className="heading">פרטים</div>
      <form
        className="form"
        style={{ direction: "rtl" }}
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          if (!form.checkValidity() && isFormValid)
            return form.reportValidity(); // מראה הודעות דפדפן

          console.log("נרשם:", formData);
        }}
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
      </form>
    </div>
  );
};

export default SubscribeForm;
