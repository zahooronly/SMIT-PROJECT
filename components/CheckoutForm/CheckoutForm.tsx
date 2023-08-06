import React, { useState } from "react";

interface CheckoutFormState {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
}

const CheckoutForm: React.FC = () => {
  const [formData, setFormData] = useState<CheckoutFormState>({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit the form data to the server for order processing
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="p-2 border border-gray-400 rounded-lg"
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="p-2 border border-gray-400 rounded-lg"
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className="p-2 border border-gray-400 rounded-lg"
      />
      <input
        type="text"
        name="postalCode"
        placeholder="Postal Code"
        value={formData.postalCode}
        onChange={handleChange}
        className="p-2 border border-gray-400 rounded-lg"
      />
      <button
        type="submit"
        className="py-2 px-4 bg-blue-500 text-white rounded-lg"
      >
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
