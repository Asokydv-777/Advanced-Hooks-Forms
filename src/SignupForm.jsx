import { useState } from "react";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Name is required" : "";
      case "email":
        return value.includes("@") ? "" : "Email must contain @";
      case "age":
        return Number(value) > 0 ? "" : "Age must be a positive number";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate the field that just changed
    const errorMessage = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Re-validate all fields on submit
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validateField(key, formData[key]);
    });
    setErrors(newErrors);

    if (Object.values(newErrors).every((err) => err === "")) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "20px", maxWidth: "300px" }}
    >
      <div>
        <label>Name: </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label>Email: </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>Age: </label>
        <input
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Your age"
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
      </div>

      <button type="submit" style={{ marginTop: "10px" }}>
        Submit
      </button>
    </form>
  );
}

export default SignupForm;
