# Shrinkly - Front-End Application (Week 2 Task)

This directory contains the front-end source code for **Shrinkly**, a modern, blazing-fast URL shortener. This front-end was developed to interact seamlessly with underlying back-end API services, providing an intuitive, responsive, and accessible user experience.

## 📝 Development Process

The development of the Shrinkly front-end followed a structured, iterative approach:
1. **Requirement Analysis & Wireframing:** Designed the core user flows mapping out the Landing Page, URL Generation Dashboard, and informational views.
2. **Environment Setup:** Initialized the project using Vite for React to ensure optimal build times and Hot Module Replacement (HMR).
3. **Component Architecture:** Abstracted the UI into modular, reusable React components (e.g., `Navbar`, `Footer`) to maintain DRY principles.
4. **Routing Implementation:** Configured Client-Side Routing using React Router DOM to seamlessly connect the interconnected views without page reloads.
5. **Styling & Responsiveness:** Implemented Tailwind CSS to build a mobile-first, responsive layout that adapts to all screen sizes.
6. **API Integration & State Management:** Utilized React Hooks (`useState`, `useEffect`) to manage application state and asynchronously fetch data from the back-end endpoints.
7. **Usability Testing:** Incorporated interactive elements like hover states, loading spinners, and toast notifications (`react-toastify`) to simulate and refine user interactions.

## 🎨 Views & Navigation

The application features over three distinct, interconnected views:
- **Landing Page (`/`):** The introductory page explaining the value proposition of Shrinkly with a direct Call-To-Action.
- **Shorten Dashboard (`/shorten`):** The primary interactive view where users input long URLs and optional aliases to generate shortened links.
- **Detail Views (`/about` & `/contact`):** Dedicated informational pages outlining the privacy focus of the app and providing a feedback form.
- **Dynamic Redirection (`/:shorturl`):** A programmatic view that intercepts short URLs and dynamically redirects users based on back-end database lookups.

## 🧱 Design Patterns & Libraries

- **Component-Based Architecture:** The UI is split into isolated, single-responsibility React components.
- **Declarative UI:** Leveraging React's declarative nature to dynamically render UI based on state changes (e.g., hiding/showing the generated link).
- **Vite:** Chosen over Create-React-App for superior development performance and optimized ESBuild compilation.
- **Tailwind CSS v4:** A utility-first CSS framework used to apply styling directly within JSX, accelerating layout design while ensuring consistency.
- **React Router DOM:** Used to implement Single Page Application (SPA) routing patterns.
- **React Toastify:** Integrated for accessible, non-blocking user feedback (success/error popups).

## 🚀 How to Run the Application Locally

Follow these steps to run the front-end environment on your local machine:

**1. Install Dependencies**
Navigate to this `frontend/` directory in your terminal and install the required Node modules:
```bash
npm install
```

**2. Configure Environment Variables**
Create a `.env` file in the root of the `frontend/` directory and add the back-end API URL:
```env
VITE_API_URL=http://localhost:5000
```
*(Ensure your back-end server is running on port 5000 for local testing)*

**3. Start the Development Server**
Run the Vite development server:
```bash
npm run dev
```

**4. View the App**
Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173`). The application will hot-reload automatically as you make changes to the code.
