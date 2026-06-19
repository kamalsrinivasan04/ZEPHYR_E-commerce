import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./CartDrawer.css";

function CartDrawer({ isOpen, onClose }) {

  const { cartItems } =
    useContext(CartContext);

  const totalPrice =
    cartItems.reduce(
      (total, item) =>
        total + item.price,
      0
    );

  return (
    <div
      className={`cart-drawer ${
        isOpen ? "open" : ""
      }`}
    >

      <div className="cart-header">

        <h2>Your Cart</h2>

        <button onClick={onClose}>
          X
        </button>

      </div>

      <div className="cart-items">

        {cartItems.length === 0 ? (
          <p>
            Cart is Empty
          </p>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="cart-item"
            >
              <p>{item.name}</p>

              <p>
                ₹{item.price}
              </p>
            </div>
          ))
        )}

      </div>

      <div className="cart-footer">

        <h3>
          Total ₹{totalPrice}
        </h3>

        <button>
          Checkout
        </button>

      </div>

    </div>
  );
}

export default CartDrawer;