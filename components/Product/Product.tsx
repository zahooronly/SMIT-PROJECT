// Product.tsx
import React from "react";

interface ProductCard {
  name: string;
  category: string;
  description: string;
  price: number;
  color: string;
  size: string;
  image: string;
}

interface ProductProps {
  product: ProductCard;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4">
      <h3 className="font-bold text-lg mb-2">{product.name}</h3>
      <p className="text-gray-500 mb-2">Category: {product.category}</p>
      <p className="text-gray-500 mb-2">Description: {product.description}</p>
      <p className="text-gray-500 mb-2">Price: ${product.price}</p>
      <p className="text-gray-500 mb-2">Color: {product.color}</p>
      <p className="text-gray-500 mb-2">Size: {product.size}</p>
      <div className="flex">
        <img
          src={product.image}
          alt="Product"
          className="w-20 h-20 object-cover"
        />
      </div>
    </div>
  );
};

export default Product;
