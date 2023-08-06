import mongoose from "mongoose";
import Joi from "joi";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String },
  size: { type: String },
  images: [{ type: String }],
  ratings: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      rating: { type: Number, min: 1, max: 5 },
      review: { type: String },
    },
  ],
  stock: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);

const validateProduct = (product) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    color: Joi.string(),
    size: Joi.string(),
    images: Joi.array().items(Joi.string()),
    stock: Joi.number().required(),
  });

  return schema.validate(product);
};

export { Product, validateProduct };
