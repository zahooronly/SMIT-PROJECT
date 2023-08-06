"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface ProductForm {
  name: string;
  category: string;
  description: string;
  price: number;
  color: string;
  size: string;
  image: string;
}

const initialFormData: ProductForm = {
  name: "",
  category: "",
  description: "",
  price: 0,
  color: "",
  size: "",
  image: "",
};

const ProductForm: React.FC<{
  handleOk: () => void;
  handleAddProduct: (newProduct: ProductForm) => void;
}> = ({ handleOk, handleAddProduct }) => {
  const [formData, setFormData] = useState<ProductForm>(initialFormData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddProduct(formData);
    handleOk();
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-[30vw] sm:w-[90vw] mx-auto px-4 py-8 bg-white rounded-lg shadow-md text-black"
      >
        <div className="flex justify-between">
          <div className="text-2xl text-center">Add New Item</div>
          <button
            onClick={handleOk}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Close Form
          </button>
        </div>
        <div>
          <label htmlFor="name" className="block font-medium">
            Product Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="category" className="block font-medium">
            Category:
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Category</option>
            <option value="clothing">Clothing</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
        <div>
          <label htmlFor="description" className="block font-medium">
            Product Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="price" className="block font-medium">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="color" className="block font-medium">
            Color:
          </label>
          <select
            value={formData.color}
            onChange={(e) => handleChange(e)}
            name="color"
            style={{ width: "100%" }}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            {/* Add more color options here */}
          </select>
        </div>
        <div>
          <label htmlFor="size" className="block font-medium">
            Size:
          </label>
          <select
            value={formData.size}
            onChange={(e) => handleChange(e)}
            name="size"
            style={{ width: "100%" }}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            {/* Add more size options here */}
          </select>
        </div>
        <div>
          <label htmlFor="image" className="block font-medium">
            Image URL:
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
