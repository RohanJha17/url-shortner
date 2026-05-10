# Week 5 Task: Testing, Debugging, and Optimization Report
## Project: Shrinkly (MERN Stack URL Shortener)

### 1. Testing Strategies Employed
The testing methodology for Shrinkly encompassed both Unit Testing and Integration Testing to ensure high reliability across the full stack.

- **Unit Testing Strategy:** Focused on the back-end API. Simulated database calls and validated that the `generate` and `url` endpoints returned expected HTTP status codes (200, 400, 404) and correctly structured JSON payloads based on various input states (valid URL, empty URL, duplicate alias).
- **Integration Testing Strategy:** Focused on the cross-layer communication between the React front-end and the Express back-end. Tests ensured that state updates triggered correct API `fetch` calls, and that the UI successfully rendered response data (success toasts vs. error toasts).

*Mock Test Cases Designed:*
1. `POST /api/generate` with valid data -> Expect 200 OK and `shorturl` returned.
2. `POST /api/generate` with existing alias -> Expect 400 Bad Request and error message.
3. `GET /api/url/:shorturl` with invalid alias -> Expect 404 Not Found.

### 2. Debugging Report & Error Logs
During the integration phase, several critical bugs were identified and resolved using rigorous debugging techniques (console logging, network tab inspection, and server log analysis).

**Bug 1: CORS Policy Violation**
- **Error Log:** `Access to fetch at 'http://localhost:5000/api/generate' from origin 'http://localhost:5173' has been blocked by CORS policy.`
- **Debugging Process:** Inspected the browser Network tab and noted blocked preflight requests.
- **Resolution:** Installed and configured the `cors` middleware in the Express server to explicitly whitelist the front-end origin.

**Bug 2: Double Slash API Route Failure**
- **Error Log:** `POST https://shrinkly-backend.onrender.com//api/generate 404 (Not Found)`
- **Debugging Process:** Reviewed the failed request URL in the Chrome DevTools. Noticed a syntax error (`//`) caused by a trailing slash in the `VITE_API_URL` environment variable.
- **Resolution:** Implemented a Regex sanitization step in the React fetch call: `import.meta.env.VITE_API_URL.replace(/\/$/, "")` to programmatically remove trailing slashes before appending the route endpoint.

**Bug 3: Vercel SPA Routing 404**
- **Error Log:** `404 NOT_FOUND Code: NOT_FOUND`
- **Debugging Process:** Identified that direct navigation to `/:shorturl` bypassed React Router because Vercel attempted to locate a physical HTML file.
- **Resolution:** Created a `vercel.json` configuration file implementing rewrite rules, forcing all traffic to route through `index.html` to allow React Router to mount.

### 3. Optimization Summary
To ensure lightning-fast performance, several optimizations were implemented across the stack:
- **Build Tool Optimization:** Transitioned the React app from Create-React-App to **Vite**, reducing local Hot Module Replacement (HMR) times from seconds to milliseconds and heavily minimizing the production bundle size using Rollup.
- **CSS Tree-Shaking:** Utilized Tailwind CSS to ensure that only the CSS classes actually used in the application were included in the final production bundle, vastly decreasing the stylesheet load time.
- **Asynchronous Non-Blocking I/O:** Ensured all MongoDB queries utilized async/await architectures, preventing the Express event loop from blocking during high-volume database reads.
- **CDN Caching:** Deployed the compiled React frontend to Vercel's Global Edge Network, ensuring static assets are cached and delivered to users from the server geographically closest to them.

### 4. Lessons Learned
The primary lesson learned during this phase was the importance of environment variable sanitization. A single trailing slash in a `.env` file can break an entire production application. Building programmatic safeguards against human error during deployment is just as critical as writing clean functional code.
