import React from "react";
import { useSelector } from 'react-redux';
import { selectCartCount } from '../features/cart/CartSlice.jsx';

export default function Navbar({ page, navigate }) {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={(event) => { event.preventDefault(); navigate('home'); }}>
        <span className="brand-mark" aria-hidden="true">✿</span>
        <span>paradise<span className="brand-light"> nursery</span></span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <button className={page === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => navigate('home')}>Home</button>
        <button className={page === 'plants' ? 'nav-link active' : 'nav-link'} onClick={() => navigate('plants')}>Plants</button>
        <button className={page === 'about' ? 'nav-link active' : 'nav-link'} onClick={() => navigate('about')}>About Us</button>
        <button className={page === 'cart' ? 'cart-link active' : 'cart-link'} onClick={() => navigate('cart')} aria-label={`Shopping cart, ${cartCount} items`}>
          <span aria-hidden="true">🛒</span><span>Cart</span><span className="cart-count">{cartCount}</span>
        </button>
      </nav>
    </header>
  );
}