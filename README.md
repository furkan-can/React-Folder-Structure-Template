# React Project Template with Structured Folder Organization

This repository serves as a foundational template for kickstarting React applications while maintaining a clean and organized project structure. The structure is designed to enhance code readability, maintainability, and scalability. Here's an overview of the key components and technologies used:

### How to run the project

```javascript
npm i
```
and
```javascript
npm run dev
```

## Used Technologies

- Axios: For making HTTP requests to your API.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- React Icons: A library providing popular icon packs as React components.
- React Router Dom (v6): For declarative routing and navigation within the app.
- Prop Types: Runtime type checking for React props to catch bugs early.
- Redux Toolkit: A Redux library that simplifies state management.

## Most Used Folder Structure

```javascript
React Folder Structure
.
├── public
├── src
|    ├── assets
|    |     ├── icons
|    |     └── images
|    ├── components
|    |     ├── Button
|    |     |     └── index.jsx
|    |	   ├── inputs
|    |     |     └── index.jsx
|    |     └── index.js
|    ├── layout
|    |     ├── Header
|    |     |     └── index.jsx
|    |     ├── Navbar.jsx
|    |     |     └── index.jsx
|    |     ├── Footer.jsx
|    |     |     └── index.jsx
|    |     └── index.js
|    ├── pages
|    |     ├── Home
|    |     |     └── index.jsx
|    |     ├── Login
|    |     |     └── index.jsx
|    |     ├── Signup
|    |     |     └── index.jsx
|    |     ├── About
|    |     |     └── index.jsx
|    |     ├── Error
|    |     |     └── index.jsx
|    |     └── index.js
|    ├── Routers
|    |     └── Routers.jsx
|    ├── store
|    |     ├── slices
|    |     |     ├── featureSlice1.js
|    |     |     └── featureSlice2.js
|    |     ├── rootReducer.js  
|    |     └── store.js
|    ├── services
|    |     ├── api.js                 // API request functions
|    |     └── dataUtils.js           // Data manipulation functions
|    ├── utils
|    |     ├── constants
|    |     |     ├── Strapi.js        // Example
|    |     |     └── Firebase.js      // Example
|    |     ├── helpers
|    |     |     ├── arrays.js        // Example
|    |     |     └── helpers.js       // Example
|    |     └── hooks  
|    |           └── useIsMobile.js   // Example
|    ├── App.jsx
|    ├── index.css
|    └── main.jsx
|
├── .gitignore
├── index.html
├── .env
├── package-lock.json
├── package.json
├── README.md
└── ...                               // Configuration Files
```

## Folders include

- `public`       : Contains static assets like the HTML entry point and other files.
- `assests`      : Houses icons and images used throughout the application.
- `components`   : Reusable UI components organized by type.
- `layout`       : Reusable layout components.
- `pages`        : Individual pages or views of your app.
- `Routers`      : Defines the routing structure of the app.
- `services`     : API Operations
- `store`        : Redux store setup and state management.
- `utils`        : General utility functions and constants.
  - `Constants`    : Constants used throughout the app (e.g., API endpoints).
  - `helpers`      : Helper functions for various tasks.
  - `hooks`        : Custom React hooks (e.g., useIsMobile).
- `.env`
- `.eslintrc.cjs`
- `.prettierrc.cjs`
- `.gitignore`
- `package.json`
- `.vite.config.js`

## How to Use
1. Clone this repository to your local machine.
2. Customize the components, styles, and logic to match your application's requirements.
3. Leverage the provided structure to maintain a clean codebase as your project scales.
4. Utilize the predefined utilities, routing, and state management for a smoother development experience.


Feel free to explore the various directories and components to understand how everything fits together. This template provides a solid foundation, allowing you to focus on building features rather than setting up the project structure from scratch.
