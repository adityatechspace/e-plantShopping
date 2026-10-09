import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from '../features/cart/CartSlice.jsx';

export default function CartItem({ navigate }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <span className="empty-cart-icon">✿</span>
          <p className="eyebrow">YOUR LITTLE GREEN CORNER</p>
          <h1>Your cart is taking a breather.</h1>
          <p>There are no plants here just yet. Your next favorite might be one scroll away.</p>
          <button className="button" onClick={() => navigate('plants')}>Explore the plants <span>→</span></button>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-heading">
        <div><p className="eyebrow">READY TO GROW?</p><h1>Your shopping cart<span>.</span></h1><p>{count} {count === 1 ? 'plant' : 'plants'} ready for a new home</p></div>
        <button className="text-button" onClick={() => navigate('plants')}>← Continue shopping</button>
      </div>
      <div className="cart-layout">
        <section className="cart-items" aria-label="Cart items">
          {items.map((item) => (
            <article className="cart-row" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-thumb" />
              <div className="cart-item-info">
                <span className="plant-category">{item.category}</span>
                <h2>{item.name}</h2>
                <p>${item.price.toFixed(2)} <span>each</span></p>
                <button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
              <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                <button aria-label={`Decrease ${item.name} quantity`} disabled={item.quantity <= 1} onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                <span>{item.quantity}</span>
                <button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
              </div>
              <strong className="line-total">${(item.price * item.quantity).toFixed(2)}</strong>
            </article>
          ))}
        </section>
        <aside className="order-summary">
          <p className="eyebrow">A LITTLE SUMMARY</p><h2>Order details</h2>
          <div className="summary-line"><span>Plants ({count} items)</span><span>${total.toFixed(2)}</span></div>
          <div className="summary-line"><span>Delivery</span><span className="free-label">On us</span></div>
          <div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
          <button className="button checkout-button" onClick={() => window.alert('Checkout is coming soon. Your plants will be ready when we are!')}>Checkout <span>→</span></button>
          <p className="secure-note">♡ Good things are growing.</p>
          <button className="text-button clear-cart" onClick={() => dispatch(clearCart())}>Clear cart</button>
        </aside>
      </div>
    </main>
  );
}