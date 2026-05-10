# Week 6 Task: Deployment, Maintenance, and Project Reflection
## Project: Shrinkly (MERN Stack URL Shortener)

---

### 1. Deployment Guide

To ensure optimal performance and scalability, the application leverages a split-hosting deployment strategy. The static React front-end is deployed on **Vercel** (a Global CDN), while the Node.js/Express back-end API is deployed on **Render** (a Cloud Application Platform). The database is hosted on **MongoDB Atlas**.

#### A. Pre-Deployment Preparation
1. **Environment Variables:** All hardcoded API keys and local URLs were stripped from the codebase and replaced with dynamic `process.env` references.
2. **Git Version Control:** Both the `frontend` and `backend` directories were committed to a single unified GitHub Monorepo.

#### B. Database Deployment (MongoDB Atlas)
1. Create a free M0 Cluster on MongoDB Atlas.
2. Create a Database User and configure Network Access to allow connections from `0.0.0.0/0` (required for dynamic Render IP addresses).
3. Copy the Node.js connection string to be used as the `MONGODB_URI`.

#### C. Back-End Deployment (Render)
1. In the Render Dashboard, create a new "Web Service" linked to the GitHub repository.
2. Set the **Root Directory** to `backend`.
3. Set Build Command: `npm install` | Start Command: `node server.js`.
4. Under Advanced settings, inject the `MONGODB_URI` environment variable.
5. Deploy and copy the resulting live Render URL.

#### D. Front-End Deployment (Vercel)
1. In the Vercel Dashboard, import the GitHub repository and set the **Root Directory** to `frontend`.
2. Add a `vercel.json` file containing rewrite rules (`"source": "/(.*)", "destination": "/index.html"`) to prevent 404 errors during SPA routing.
3. Inject the `VITE_API_URL` environment variable using the live Render URL.
4. Deploy the application.

#### E. Troubleshooting Common Issues
- **CORS Errors:** If the frontend is blocked, ensure the Express `cors` middleware explicitly whitelists the Vercel domain.
- **Double Slash 404s:** Ensure the `VITE_API_URL` environment variable does not contain a trailing slash. If it does, utilize `.replace(/\/$/, "")` in the frontend fetch call to sanitize it.

---

### 2. Maintenance Documentation

#### A. Logging and Error Reporting
- **Server Logging:** Basic `console.error()` logs are outputted to the Render dashboard terminal. For production scaling, integrating a robust logger like **Winston** or **Morgan** is recommended to write logs to external files.
- **Client Error Reporting:** The React frontend utilizes `react-toastify` to provide immediate, non-blocking UI feedback when HTTP 400 or 404 errors are thrown by the API.

#### B. Database Maintenance
- **Monitoring:** Utilize the MongoDB Atlas dashboard to monitor query performance, connection pooling, and storage limits. 
- **Indexing:** Ensure the `shorturl` field in the database is indexed to maintain `O(1)` or `O(log n)` read times as the database grows.

#### C. Update Procedures
- Updates are managed via a standard Git workflow. Changes should be pushed to a `development` branch, tested locally, and merged into `main` via a Pull Request. Both Vercel and Render are configured for Continuous Deployment (CD), meaning any push to `main` will automatically trigger a zero-downtime rebuild.

---

### 3. Project Reflection Report

#### What Went Well
The decision to decouple the monolithic Next.js architecture into a separated React (Vite) frontend and an Express backend was a major success. This separation of concerns dramatically simplified the API routing logic and made frontend styling with Tailwind CSS much cleaner. The resulting User Interface is extremely fast, highly responsive, and aesthetically pleasing.

#### Challenges Faced
The most significant challenges arose during the deployment phase. Managing cross-origin communication between two separate cloud providers (Render and Vercel) required a deep dive into CORS policy configuration. Additionally, deploying a React Router SPA to Vercel initially broke all direct-link navigation due to missing server-side rewrite rules, which was an excellent learning experience in platform-specific hosting configurations.

#### Areas for Self-Improvement & Future Features
While the core functionality is robust, the application lacks user retention features. Future iterations of this project will focus on:
1. **User Authentication:** Implementing JWT-based auth so users can log in and manage their generated links.
2. **Analytics Dashboard:** Upgrading the simple "click counter" into a full analytics suite displaying referring domains and geographic data.
3. **Rate Limiting:** Implementing an IP-based rate limiter on the Express server to prevent malicious bot spam and DDOS attacks on the API.

Overall, this 6-week project provided invaluable hands-on experience in the complete software development lifecycle, moving from architectural theory to a fully deployed, production-ready MERN stack application.
