"use client";
import CardComponents from "@/components/CardComponent/CardComponent";
import ProductForm from "@/components/ProductForm/ProductForm";
import React, { useState, useEffect } from "react";

// Define the Product interface
export interface Product {
  name: string;
  category: string;
  description: string;
  price: number;
  color: string;
  size: string;
  image: string;
}

const AddProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      name: "Nike Air Max 270",
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      price: 150,
      color: "black",
      size: "10",
      image:
        "https://1ststep.pk/uploads/1ststep/05rbHUoplSb9HFaE9beHk02orYaaDn1Km118NT62.webp",
    },
    {
      name: "Nike Air Max 270",
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      price: 150,
      color: "black",
      size: "10",
      image:
        "https://1ststep.pk/uploads/1ststep/05rbHUoplSb9HFaE9beHk02orYaaDn1Km118NT62.webp",
    },
    {
      name: "Nike Air Max 270",
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      price: 150,
      color: "black",
      size: "10",
      image:
        "https://1ststep.pk/uploads/1ststep/05rbHUoplSb9HFaE9beHk02orYaaDn1Km118NT62.webp",
    },
    {
      name: "Nike Air Max 270",
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      price: 150,
      color: "black",
      size: "10",
      image:
        "https://1ststep.pk/uploads/1ststep/05rbHUoplSb9HFaE9beHk02orYaaDn1Km118NT62.webp",
    },
    {
      name: "Nike Air Max 270",
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      price: 150,
      color: "black",
      size: "10",
      image:
        "https://1ststep.pk/uploads/1ststep/05rbHUoplSb9HFaE9beHk02orYaaDn1Km118NT62.webp",
    },
    {
      name: "Nike Air Max 270",
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      price: 150,
      color: "black",
      size: "10",
      image:
        "https://1ststep.pk/uploads/1ststep/05rbHUoplSb9HFaE9beHk02orYaaDn1Km118NT62.webp",
    },
    {
      name: "Nike Air Max 270",
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      price: 150,
      color: "black",
      size: "10",
      image:
        "https://1ststep.pk/uploads/1ststep/05rbHUoplSb9HFaE9beHk02orYaaDn1Km118NT62.webp",
    },
    {
      name: "Nike Air Max 270",
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      price: 150,
      color: "black",
      size: "10",
      image:
        "https://1ststep.pk/uploads/1ststep/05rbHUoplSb9HFaE9beHk02orYaaDn1Km118NT62.webp",
    },
    {
      name: "Nike Air Max 270",
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      price: 150,
      color: "black",
      size: "10",
      image:
        "https://1ststep.pk/uploads/1ststep/05rbHUoplSb9HFaE9beHk02orYaaDn1Km118NT62.webp",
    },
    {
      name: "Nike Air Max 270",
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      price: 150,
      color: "black",
      size: "10",
      image:
        "https://1ststep.pk/uploads/1ststep/05rbHUoplSb9HFaE9beHk02orYaaDn1Km118NT62.webp",
    },
    {
      name: "Nike Air Max 270",
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      price: 150,
      color: "black",
      size: "10",
      image:
        "https://1ststep.pk/uploads/1ststep/05rbHUoplSb9HFaE9beHk02orYaaDn1Km118NT62.webp",
    },
    {
      name: "Nike Air Max 270",
      category: "Shoes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      price: 150,
      color: "black",
      size: "10",
      image:
        "https://1ststep.pk/uploads/1ststep/05rbHUoplSb9HFaE9beHk02orYaaDn1Km118NT62.webp",
    },
  ]);
  // let productsList: Product[] = [];
  // Load products from local storage when the component mounts
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, []);
  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  // Save products to local storage whenever the products state changes
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
  };

  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
  };

  return (
    <div className="bg-white/30 min-h-screen bg-[url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center">
      <div className="py-24"></div>
      <div className="p-12  rounded-xl backdrop-blur-md mx-auto container bg-white/40">
        <div className="flex justify-between mt-6">
          <h1 className="text-2xl font-bold">Products</h1>
          <button
            onClick={showModal}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Add New Item
          </button>
        </div>
        {products.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Product Preview</h2>
            <div className="flex flex-wrap gap-10 mx-auto m-12">
              {products?.map((product, index) => (
                <CardComponents key={index} product={product} />
              ))}
            </div>
          </div>
        )}
        <div className="">
          {visible && (
            <ProductForm
              handleOk={handleOk}
              handleAddProduct={handleAddProduct}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
