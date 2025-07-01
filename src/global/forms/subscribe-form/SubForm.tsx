import { emailRegex } from "@/utils/regex.utils";
import { useRef, useState } from "react";
import "./SubForm.css";

const SubForm = () => {
  const [form, setForm] = useState({ fullName: "", email: "" });
  const [pending, setPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    const formData = new FormData();
    formData.append("fullName", form.fullName);
    formData.append("email", form.email);
    formData.append("workshop_date", "10 ביולי 2025");
    formData.append("workshop_time", "18:00");
    formData.append("workshop_location", "Zoom – קישור יישלח לנרשמים");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxrG2j2ez_R85pW9S8NlROCYGLMHNfQ7JmqdT-2XE849DzCVYk08svHwgvx222OpjyJ/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      window.location.href = "/thank-you";
    } catch (error) {
      console.error("שגיאה בשליחת הטופס:", error);
      setPending(false);
    }
  };

  const isNameValid = form.fullName.trim() !== "";

  const isFormValid = isNameValid && emailRegex.test(form.email) && !pending;

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
          name="fullName"
          id="name"
          placeholder="שם מלא"
          value={form.fullName}
          onChange={handleChange}
          title="יש להזין שם מלא"
          disabled={pending}
        />

        <input
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="אימייל"
          value={form.email}
          pattern=".*\S.*" // לא רק רווחים
          onChange={handleChange}
          title="יש להזין אימייל תקין"
          // disabled={pending}
        />

        <input type="hidden" name="workshop_date" value="10 ביולי 2025" />
        <input type="hidden" name="workshop_time" value="18:00" />
        <input
          type="hidden"
          name="workshop_location"
          value="Zoom – קישור יישלח לנרשמים"
        />

        <input
          className={`subscribe-button ${isFormValid ? "validate-form" : ""}`}
          type="submit"
          value={pending ? "שולח..." : "הרשמה"}
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

export default SubForm;
