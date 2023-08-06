"use client";
import React from "react";
import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
// Meta
interface Product {
  name: string;
  category: string;
  description: string;
  price: number;
  color: string;
  size: string;
  image: string;
}

interface ProductProps {
  product: Product;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => (
  <Card
    style={{ width: 300 }}
    cover={<img alt="example" src={product?.image} />}
  >
    <Card.Meta
      avatar={
        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
      }
      title={product?.name}
      description={product?.description}
    />
    <div>
      <p>Category: {product?.category}</p>
      <p>Price: ${product?.price}</p>
      <p>Color: {product?.color}</p>
      <p>Size: {product?.size}</p>
    </div>
  </Card>
);

export default ProductCard;
