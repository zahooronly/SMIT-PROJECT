import React from "react";

interface CartItem {
  _id: string;
  name: string;
  price: number;
}

interface ShoppingCartProps {
  cartItems: CartItem[];
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cartItems }) => {
  const getTotalPrice = (): number => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center mb-2"
            >
              <p>{item.name}</p>
              <p className="text-base font-semibold">Price: ${item.price}</p>
            </div>
          ))}
          <p className="text-xl font-semibold mt-4">
            Total: ${getTotalPrice()}
          </p>
          <button className="py-2 px-4 bg-blue-500 text-white rounded-lg mt-4">
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
