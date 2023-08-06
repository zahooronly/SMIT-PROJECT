import React from "react";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCatalogProps {
  products: Product[];
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="p-4 border border-gray-200 rounded-lg"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.description}</p>
          <p className="mt-2 text-base font-semibold">
            Price: ${product.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
