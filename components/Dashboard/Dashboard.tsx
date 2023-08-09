"use client";
import React, { useState } from "react";

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    const existingCartItem = cart.find((item) => item.product === product);

    if (existingCartItem) {
      // If the product is already in the cart, update its quantity
      const updatedCart = cart.map((item) =>
        item.product === product
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div className="bg-desktop bg-cover bg-fixed">
      <div className="pt-24 flex flex-col sm:flex-row h-screen backdrop-blur-lg">
        <div className="w-full sm:w-1/2 border-r">
          <h2 className="text-xl font-bold mb-4">Product List</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            onClick={() => {
              /* Handle adding a new product */
            }}
          >
            Add New Product
          </button>
          {products.map((product, index) => (
            <div key={index} className="mb-2">
              <p>{product.name}</p>
              <button
                className="bg-green-500 text-white px-2 py-1 rounded"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <h2 className="text-xl font-bold mb-4">Cart</h2>
          {cart.map((item, index) => (
            <div key={index} className="mb-2">
              <p>
                {item.product.name} - Quantity: {item.quantity}
              </p>
            </div>
          ))}
          <p className="font-bold mt-4">
            Total Price: ${calculateTotalPrice()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// Interfaces for Product and CartItem
interface Product {
  name: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}
