import React from "react";
import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';

export default function App() {
  const [page, setPage] = useState('home');
  const navigate = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <Navbar page={page} navigate={navigate} />
      {page === 'home' && (
        <main className="landing-page">
          <div className="landing-overlay" />
          <section className="hero-content">
            <p className="eyebrow hero-eyebrow"><span /> YOUR HOME, A LITTLE WILDER</p>
            <h1>Grow your<br /><em>happy place.</em></h1>
            <p className="hero-description">Thoughtful plants for slower mornings, brighter corners, and a home that feels a little more like you.</p>
            <div className="hero-actions">
              <button className="button button-light" onClick={() => navigate('plants')}>Get Started <span>↗</span></button>
              <button className="hero-secondary" onClick={() => navigate('about')}>Our story <span>→</span></button>
            </div>
            <div className="hero-note"><span>✳</span><p>MAKE ROOM FOR A LITTLE MORE NATURE</p></div>
          </section>
          <div className="hero-bottom"><span>ROOTED IN GOOD LIVING</span><span>01 — 03</span></div>
        </main>
      )}
      {page === 'plants' && <ProductList />}
      {page === 'cart' && <CartItem navigate={navigate} />}
      {page === 'about' && <AboutUs />}
      <footer className="site-footer">
        <div className="footer-brand"><span className="brand-mark">✿</span> paradise nursery</div>
        <p>Grow a little joy, every day.</p>
        <span>© {new Date().getFullYear()} Paradise Nursery</span>
      </footer>
    </div>
  );
}