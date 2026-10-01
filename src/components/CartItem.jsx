
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../features/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <main className="page-container">
      <h1>Shopping Cart</h1>

      {items.length === 0 ? (
        <section className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>
            Explore our plants and find something
            beautiful for your home.
          </p>

          <Link to="/plants">
            <button className="primary-button">
              Continue Shopping
            </button>
          </Link>
        </section>
      ) : (
        <>
          {items.map((item) => (
            <article
              className="cart-item"
              key={item.id}
            >
              <img
                src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=300&q=80`}
                alt={item.name}
              />

              <div>
                <h2>{item.name}</h2>

                <p>
                  Unit Price: ₹{item.price}
                </p>

                <p>
                  Quantity: {item.quantity}
                </p>

                <div className="quantity-controls">
                  <button
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() =>
                      dispatch(
                        decreaseQuantity(item.id)
                      )
                    }
                    disabled={item.quantity === 1}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() =>
                      dispatch(
                        increaseQuantity(item.id)
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <p>
                  Item Total: ₹
                  {item.price * item.quantity}
                </p>
              </div>

              <div>
                <button
                  className="delete-button"
                  onClick={() =>
                    dispatch(
                      removeFromCart(item.id)
                    )
                  }
                >
                  Delete
                </button>
              </div>
            </article>
          ))}

          <section className="cart-summary">
            <h2>Order Summary</h2>

            <p>
              Total Items: {totalItems}
            </p>

            <h3>
              Total Amount: ₹{totalAmount}
            </h3>

            <div className="cart-actions">
              <Link to="/plants">
                <button className="continue-button">
                  Continue Shopping
                </button>
              </Link>

              <button
                className="checkout-button"
                onClick={() =>
                  alert("Checkout Coming Soon!")
                }
              >
                Checkout
              </button>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default CartItem;
