import React, { useState } from "react";

interface UserRegistrationFormState {
  email: string;
  password: string;
  confirmPassword: string;
}

const UserRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<UserRegistrationFormState>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit the form data to the server for user registration
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="p-2 border border-gray-400 rounded-lg"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="p-2 border border-gray-400 rounded-lg"
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="p-2 border border-gray-400 rounded-lg"
      />
      <button
        type="submit"
        className="py-2 px-4 bg-blue-500 text-white rounded-lg"
      >
        Register
      </button>
    </form>
  );
};

export default UserRegistrationForm;
