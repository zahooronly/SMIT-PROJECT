"use client";
// import React, { useState, ChangeEvent, FormEvent } from "react";

// interface ProductForm {
//   name: string;
//   category: string;
//   description: string;
//   price: number;
//   color: string;
//   size: string;
//   image: string;
// }

// const initialFormData: ProductForm = {
//   name: "",
//   category: "",
//   description: "",
//   price: 0,
//   color: "",
//   size: "",
//   image: "",
// };

// interface ProductFormProps {
//   handleOk: () => void;
//   handleAddProduct: (newProduct: ProductForm) => void;
// }
// const ProductForm: React.FC<ProductFormProps> = ({
//   handleOk,
//   handleAddProduct,
// }) => {
//   const [formData, setFormData] = useState<ProductForm>(initialFormData);

//   const handleChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     handleAddProduct(formData);
//     setFormData(initialFormData);
//   };
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
  handleAddProduct: (product: ProductForm) => void;
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
    setFormData(initialFormData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 w-[50vw] sm:w-[90vw] mx-auto px-4 py-8 bg-white rounded-lg shadow-md text-black"
    >
      <div className="flex justify-between">
        <div className="text-2xl text-center">Add New Item</div>
        <button
          onClick={handleOk}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close Form1
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
        <input
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="size" className="block font-medium">
          Size:
        </label>
        <input
          type="text"
          id="size"
          name="size"
          value={formData.size}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block font-medium">Image URL:</label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
