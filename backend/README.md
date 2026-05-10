# Shrinkly - Back-End API (Week 3 Task)

This directory contains the server-side RESTful API for **Shrinkly**. The back-end is responsible for handling URL creation logic, executing CRUD operations against the database, enforcing data validation, and managing error handling.

## 🛠️ Technology Stack
- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Fast, unopinionated web framework for Node.js used for routing.
- **MongoDB**: NoSQL database used for highly scalable document storage.
- **CORS & Dotenv**: Middleware for secure cross-origin requests and environment variable management.

## 🧱 Architecture & Design Patterns

The back-end employs a modular, MVC-inspired directory structure to ensure code maintainability and separation of concerns:
- `/config` - Contains database connection logic (`db.js`), separating infrastructure from application logic.
- `/controllers` - Contains the core business logic (`urlController.js`) for generating and retrieving URLs.
- `/routes` - Defines the API endpoints and maps HTTP methods to specific controller functions.

**Key Features:**
- **Data Validation:** Before inserting records, the API validates that the provided URL is well-formed and checks the database to ensure custom short aliases do not already exist.
- **Robust Error Handling:** Wrap asynchronous database calls in `try...catch` blocks to gracefully return standard HTTP error codes (400, 404, 500) rather than crashing the server.
- **Security:** Uses CORS to restrict unauthorized domain access and obscures database credentials using `.env` files.

---

## 🚀 Setup & Execution Instructions

To run the back-end API locally:

**1. Install Dependencies**
Navigate into the `backend/` directory and install the necessary packages:
```bash
npm install
```

**2. Configure Environment Variables**
Create a `.env` file in the root of the `backend/` folder and add the following keys:
```env
PORT=5000
MONGODB_URI=mongodb+srv://<your_username>:<your_password>@cluster0...
```

**3. Run the Server**
Start the Express server:
```bash
node server.js
```
The console will log `Server running on port 5000` and confirm the successful connection to MongoDB.

---

## 📚 API Documentation

Below is the documentation for the RESTful endpoints provided by this API.

### 1. Generate Short URL
Creates a new short URL document in the database.

- **Endpoint:** `/api/generate`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Body Parameters:**
  ```json
  {
    "url": "https://www.google.com", 
    "shorturl": "mycustomlink" // (Optional)
  }
  ```

- **Expected Success Response (200 OK):**
  ```json
  {
    "success": true,
    "message": "URL Generated Successfully",
    "shorturl": "mycustomlink"
  }
  ```

- **Expected Error Response (400 Bad Request - Alias Exists):**
  ```json
  {
    "success": false,
    "message": "URL already exists!"
  }
  ```

### 2. Retrieve Original URL
Fetches the long destination URL associated with a specific short alias and increments the click tracking counter.

- **Endpoint:** `/api/url/:shorturl`
- **Method:** `GET`
- **URL Parameters:**
  - `shorturl` (String) - The unique alias to look up.

- **Expected Success Response (200 OK):**
  ```json
  {
    "success": true,
    "url": "https://www.google.com"
  }
  ```

- **Expected Error Response (404 Not Found):**
  ```json
  {
    "success": false,
    "message": "URL not found"
  }
  ```
