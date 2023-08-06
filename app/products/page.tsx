import Product from "@/components/Product/Product";
import ProductForm from "@/components/ProductForm/ProductForm";
import React, { useState } from "react";
const AddProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
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
    <div className="py-24">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <button
        onClick={showModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add New Item
      </button>
      {visible && (
        <ProductForm handleOk={handleOk} handleAddProduct={handleAddProduct} />
      )}
      {products.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Product Preview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProductPage;
