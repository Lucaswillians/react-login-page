import "./Input.css";
import React, { useState } from "react";

export default function Input({ require, label, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input">
      <label>
        {label}:
        {label.includes('Password') || label.includes('password') ? (
          <>
            <input
              type={showPassword ? "text" : "password"}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              required={require}
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </button>
          </>
        ) : (
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            required={require}
          />
        )}
      </label>
    </div>
  );
}
