import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../features/cart/CartSlice.jsx';
import { categories } from '../data/plants.js';

function PlantCard({ plant, added, onAdd }) {
  return (
    <article className="plant-card">
      <div className="plant-image-wrap">
        <img className="plant-image" src={plant.image} alt={plant.name} loading="lazy" />
        <span className="plant-tag">Plant parent favorite</span>
      </div>
      <div className="plant-card-body">
        <p className="plant-category">{plant.category}</p>
        <h3>{plant.name}</h3>
        <p className="plant-description">{plant.description}</p>
        <div className="plant-card-footer">
          <span className="price">${plant.price.toFixed(2)}</span>
          <button className={added ? 'button button-added' : 'button button-small'} onClick={onAdd} disabled={added}>
            {added ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartIds = new Set(cartItems.map((item) => item.id));

  return (
    <main className="catalog-page">
      <section className="catalog-intro">
        <p className="eyebrow">THE HOUSEPLANT EDIT</p>
        <h1>Find your kind of <em>green.</em></h1>
        <p>Little leaves, big energy. Meet the plants that make a space feel like yours.</p>
      </section>
      {categories.map((category, index) => (
        <section className="plant-category-section" key={category.name}>
          <div className="section-heading">
            <div><span className="section-index">0{index + 1} / COLLECTION</span><h2>{category.name}</h2></div>
            <p>{category.description}</p>
          </div>
          <div className="plant-grid">
            {category.plants.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                added={cartIds.has(plant.id)}
                onAdd={() => dispatch(addToCart(plant))}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}