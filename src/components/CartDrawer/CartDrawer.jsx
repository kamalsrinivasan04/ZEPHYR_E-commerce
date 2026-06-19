import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./CartDrawer.css";

function CartDrawer({ isOpen, onClose }) {

  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const totalPrice =
    cartItems.reduce(
      (total, item) =>
        total +
        item.price * item.quantity,
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
          ✕
        </button>
      </div>

      <div className="cart-items">

        {cartItems.length === 0 ? (
          <p>Cart is Empty</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >

              <h4>{item.name}</h4>

              <p>
                ₹{item.price}
              </p>

              <div className="quantity-controls">

                <button
                  onClick={() =>
                    decreaseQuantity(
                      item.id
                    )
                  }
                >
                  -
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(
                      item.id
                    )
                  }
                >
                  +
                </button>

              </div>

              <p className="subtotal">
                Subtotal:
                ₹
                {
                  item.price *
                  item.quantity
                }
              </p>

            </div>
          ))
        )}

      </div>

      <div className="cart-footer">

        <h3>
          Total: ₹{totalPrice}
        </h3>

        <button className="checkout-btn">
          Checkout
        </button>

      </div>

    </div>
  );
}

export default CartDrawer;