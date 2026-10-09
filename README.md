# Paradise Nursery

A React and Redux Toolkit shopping cart application for an online houseplant shop.

## Features
- Landing page with a botanical background and Get Started button
- About Us page
- Plant catalog grouped into three categories
- Add-to-cart actions and a live cart item count
- Cart quantity controls, item removal, totals, and a Coming Soon checkout message
- Responsive navigation shared across catalog and cart pages
- Redux Toolkit state management

## Tech stack
- React
- Vite
- Redux Toolkit and React Redux
- CSS

## Run locally
1. Install Node.js (LTS).
2. In this project directory, run `npm install`.
3. Run `npm run dev`.
4. Open the local URL printed by Vite.

## Main source files
- `src/App.jsx` — landing page and page routing
- `src/App.css` — global styles and landing-page background image
- `src/components/AboutUs.jsx` — company information
- `src/features/cart/CartSlice.jsx` — Redux cart slice
- `src/components/ProductList.jsx` — categorized product catalog
- `src/components/CartItem.jsx` — shopping cart page
