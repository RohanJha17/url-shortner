# Shrinkly - Frontend Configuration

This directory contains the React.js client for the Shrinkly URL Shortener application. It is bootstrapped with [Vite](https://vitejs.dev/) for blazing-fast development and optimized production builds.

## 🛠️ Technology Stack
- **React 18**
- **Vite** (Build Tool & Dev Server)
- **React Router DOM** (Client-side routing)
- **Tailwind CSS v4** (Styling)
- **React Toastify** (Interactive notifications)

## 📁 Folder Structure

- `/public` - Static assets like SVG icons, favicons, and images.
- `/src`
  - `/components` - Reusable UI components (e.g., `Navbar.jsx`, `Footer.jsx`).
  - `/pages` - Core application views:
    - `Home.jsx` - The landing page explaining Shrinkly.
    - `About.jsx` - Information about the app and its privacy-first focus.
    - `Contact.jsx` - User feedback/inquiry form.
    - `Shorten.jsx` - The main interface to generate short URLs.
    - `Redirect.jsx` - A dynamic route component that fetches the destination URL and redirects the user.
  - `App.jsx` - Main application wrapper and React Router configuration.
  - `index.css` - Global Tailwind CSS directives.

## 🚀 How Routing Works (Client-Side vs Server-Side)

This frontend uses **React Router** to handle navigation.
- Standard routes like `/`, `/about`, and `/shorten` load their respective page components.
- The dynamic route `/:shorturl` is caught by the `Redirect.jsx` component. When a user visits `shrinkly.vercel.app/myCustomLink`, the `Redirect` component mounts, sends an API request to the Node.js backend using the `myCustomLink` parameter, and uses `window.location.href` to instantly forward the user to the retrieved long URL.

*Note: For this Single Page Application (SPA) routing to work correctly when deployed on Vercel, a `vercel.json` file is included to rewrite all incoming traffic to `index.html`.*

## ⚙️ Environment Variables

To run this frontend locally or deploy it, you must configure the following environment variable in a `.env` file inside this `/frontend` directory:

```env
VITE_API_URL=http://localhost:5000
```
*Note: Ensure there is no trailing slash at the end of the URL. When deploying to production (e.g., Vercel), set this variable to your live backend API URL.*

## 🏃‍♂️ Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will reload if you make edits.

### `npm run build`
Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
