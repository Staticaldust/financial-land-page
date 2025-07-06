import { emailRegex } from "@/utils/regex.utils";
import { useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
// import "./SubForm.css";

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
    <Grid container>
      <form ref={formRef} style={{ direction: "rtl" }} onSubmit={handleSubmit}>
        <Grid container direction="column">
          <Grid item xs>
            <TextField
              name="fullName"
              id="name"
              placeholder="שם מלא"
              value={form.fullName}
              onChange={handleChange}
              title="יש להזין שם מלא"
              disabled={pending}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item xs>
          <TextField
            type="email"
            name="email"
            id="email"
            placeholder="אימייל"
            value={form.email}
            // pattern=".*\S.*" // לא רק רווחים
            onChange={handleChange}
            title="יש להזין אימייל תקין"
            variant="filled"
          />
        </Grid>

        <input type="hidden" name="workshop_date" value="10 ביולי 2025" />
        <input type="hidden" name="workshop_time" value="18:00" />
        <input
          type="hidden"
          name="workshop_location"
          value="Zoom – קישור יישלח לנרשמים"
        />

        <Grid item xs>
          <Button type="submit" disabled={!isFormValid}>
            {pending ? "שולח..." : "הרשמה"}
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default SubForm;
