# ShopHub Ecommerce React Website

ShopHub is a responsive ecommerce website built with React and Vite. The project demonstrates core frontend development skills such as component-based UI design, routing, authentication state, cart management, form validation, and checkout functionality.

## Project Overview

The application allows users to browse products, view product details, create an account, log in, add products to a shopping cart, update cart quantities, remove items, and place an order through a checkout page.

The project uses local data and browser `localStorage` to simulate basic authentication and user persistence without a backend.

## Features

- Product listing page with reusable product cards
- Product details page using dynamic routes
- Reusable `AddToCartButton` component
- Shopping cart state managed with React Context
- Checkout page with:
  - Order summary
  - Product images, names, prices, and quantities
  - Increase/decrease quantity controls
  - Remove item functionality
  - Subtotal and total calculations
  - Place order action
- Authentication page with login/signup modes
- Form validation using `react-hook-form`
- User session persistence with `localStorage`
- Active navigation link styling for Home and Cart
- Responsive layout for desktop and mobile screens

## Tech Stack

- React
- Vite
- React Router DOM
- React Hook Form
- JavaScript
- CSS
- LocalStorage
- ESLint

## Project Structure

```txt
src/
├── components/
│   ├── AddToCartButton.jsx
│   ├── Nav.jsx
│   └── ProductCard.jsx
├── context/
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│   ├── auth-context.js
│   └── cart-context.js
├── data/
│   └── products.js
├── pages/
│   ├── Auth.jsx
│   ├── Checkout.jsx
│   ├── Home.jsx
│   └── ProductDetails.jsx
├── App.css
├── App.jsx
└── main.jsx
```

## Key Pages

### Home Page

Displays the product catalog using reusable product card components. Each product card includes a product image, name, price, view details link, and add-to-cart button.

### Product Details Page

Uses a dynamic route to load a single product by ID. Users can view more information about a product and add it to the cart from this page.

### Auth Page

Handles user signup and login. Form validation ensures that users provide an email and a valid password before submitting.

### Checkout Page

Displays all cart items and allows users to manage their order before placing it. Users can increase or decrease item quantities, remove products, view totals, and complete the order.

## State Management

The project uses React Context for shared application state:

- `AuthContext` manages user signup, login, logout, and session persistence.
- `CartContext` manages cart items, quantity updates, item removal, and clearing the cart after checkout.

This avoids prop drilling and makes authentication/cart data accessible across the app.

## Skills Attained

Through this project, the following frontend development skills were practiced and strengthened:

- Building a React application with Vite
- Creating reusable and maintainable components
- Managing global state with React Context
- Using custom hooks for cleaner context access
- Implementing client-side routing with React Router
- Creating dynamic routes for product detail pages
- Handling form state and validation with React Hook Form
- Persisting user data using browser LocalStorage
- Implementing cart functionality from scratch
- Calculating order totals dynamically
- Structuring a React project into pages, components, context, and data folders
- Debugging common React errors such as undefined state, missing function references, and typo-related runtime errors
- Improving UI/UX with active navigation styles and responsive layouts
- Running lint and production builds to validate code quality

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Then open the local development URL shown in the terminal.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Linting

```bash
npm run lint
```

## Future Improvements

Possible improvements for future versions include:

- Connect the app to a real backend API
- Add secure password handling and real authentication
- Store cart data in localStorage or a database
- Add payment integration
- Add product search and category filters
- Add order history for logged-in users
- Add product ratings and reviews
- Improve mobile navigation

## Author

Built as a React ecommerce learning project to practice practical frontend development concepts.
